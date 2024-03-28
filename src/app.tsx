import { useEffect, useState } from "react";

import AppBar from "./app-bar";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [fromMain, setFromMain] = useState<string | null>(null);

  const handleToggle = () => {
    if (isOpen) {
      setIsOpen(false);
      setIsSent(false);
    } else {
      setIsOpen(true);
      setFromMain(null);
    }
  };
  const sendMessageToElectron = () => {
    window.Main.sendMessage("Hello I'm from React World");
    setIsSent(true);
  };

  useEffect(() => {
    if (isSent) {
      window.Main.on("message", (message: string) => {
        setFromMain(message);
      });
    }
  }, [fromMain, isSent]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-none">
        <AppBar />
      </div>
      <div className="flex-auto">
        <div className=" flex flex-col justify-center items-center h-full bg-gray-800 space-y-4">
          <h1 className="text-2xl text-gray-200">
            Vite + React + Typescript + Electron + Tailwind
          </h1>
          <button
            type="button"
            className="bg-yellow-400 py-2 px-4 rounded focus:outline-none shadow hover:bg-yellow-200"
            onClick={handleToggle}
          >
            Click Me
          </button>
          {isOpen ? (
            <div className="flex flex-col space-y-4 items-center">
              <div className="flex space-x-3">
                <h1 className="text-xl text-gray-50">
                  💝 Welcome 💝, now send a message to the Main 📩📩
                </h1>
                <button
                  type="button"
                  onClick={sendMessageToElectron}
                  className=" bg-green-400 rounded px-4 py-0 focus:outline-none hover:bg-green-300"
                >
                  Send
                </button>
              </div>
              {isSent ? (
                <div>
                  <h4 className=" text-green-500">Message sent!!</h4>
                </div>
              ) : null}
              {fromMain ? (
                <div>
                  {" "}
                  <h4 className=" text-yellow-200">{fromMain}</h4>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
