import { NestFactory } from '@nestjs/core';
import { Callback, Context, Handler } from 'aws-lambda';
import { AccountsModule } from '../libs/accounts/accounts.module';
import { AccountsController } from '../libs/accounts/accounts.controller';
import { STATUS_CODES } from 'http';
import { INestApplicationContext, Logger } from '@nestjs/common';

let applicationContext: INestApplicationContext  = null

const getApplicationContext = async (): Promise<INestApplicationContext>  => {
  if(applicationContext) return applicationContext

  applicationContext = await NestFactory.createApplicationContext(AccountsModule);

  return applicationContext
}

export const postHandler: Handler = async (event: any, context: Context) => {
  const accountContext = await getApplicationContext()
  const controller = accountContext.get(AccountsController);
  const account = await controller.createAccount(event);
  const logger = accountContext.get(Logger)

  logger.log('Successfully created account')

  return {
    statusCode: STATUS_CODES.OK,
    body: JSON.stringify(account)
  }
};
