import { INestApplicationContext, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { BillingsModule } from 'src/libs/billings/billings.module';
import { APIGatewayProxyEvent, Context, Handler } from 'aws-lambda';
import { BillingsController } from 'src/libs/billings/billings.controller';
import { STATUS_CODES } from 'http';

let applicationContext: INestApplicationContext = null;

const getApplicationContext = async (): Promise<INestApplicationContext> => {
  if (applicationContext) return applicationContext;

  applicationContext =
    await NestFactory.createApplicationContext(BillingsModule);

  return applicationContext;
};

export const postHandler: Handler = async(event: APIGatewayProxyEvent, context: Context) => {
  const billingsContext = await getApplicationContext()
  const controller = billingsContext.get(BillingsController)
  const billing = await controller.createBilling(event, context)

  const logger = billingsContext.get(Logger)
  logger.log('Successfully created billing', context)

  return {
    statusCode: STATUS_CODES.OK,
    body: JSON.stringify(billing)
  }
}