import { Global, Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import * as Joi from 'joi';

import { connectionParams } from '../ormconfig';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtGuard } from './guards';
import { LogsModule } from './logs/logs.module';
import { MenusModule } from './menus/menus.module';
import { QuestionModule } from './question/question.module';
import { RolesModule } from './roles/roles.module';
import { StatModule } from './stat/stat.module';
import { UserModule } from './user/user.module';

const envFilePath = `.env.${process.env.NODE_ENV || 'development'}`;

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
      load: [() => dotenv.config({ path: '.env' })], // 合并公共配置
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
        DB_HOST: Joi.alternatives().try(Joi.string().ip(), Joi.string().domain()),
        DB_PORT: Joi.number().default(3306),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_DATABASE: Joi.string().required(),
        DB_TYPE: Joi.string().valid('mysql', 'postgres').default('mysql'),
        DB_SYNC: Joi.boolean().default(false),
        DB_LOGGING: Joi.boolean().default(false),
        LOG_LEVEL: Joi.string().default('info'),
        LOG_ON: Joi.boolean().default(true),
        REDIS_HOST: Joi.alternatives().try(Joi.string().ip(), Joi.string().domain()),
        REDIS_PORT: Joi.number().default(6379),
        REDIS_PASSWORD: Joi.string().allow('').default(''),
        REDIS_DB: Joi.number().default(0),
      }),
    }),
    TypeOrmModule.forRoot(connectionParams),
    UserModule,
    LogsModule,
    RolesModule,
    AuthModule,
    MenusModule,
    QuestionModule,
    StatModule,
  ],
  controllers: [AppController],
  providers: [AppService, Logger, Reflector, { provide: 'APP_GUARD', useClass: JwtGuard }],
  exports: [Logger],
})
export class AppModule {}
