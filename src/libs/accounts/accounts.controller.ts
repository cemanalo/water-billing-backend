import { Injectable, Logger } from '@nestjs/common';
import { AccountsInteractor } from './accounts.interactor';
import { APIGatewayProxyEvent } from 'aws-lambda';

@Injectable()
export class AccountsController {
  constructor(private accountsInteractor: AccountsInteractor, private logger: Logger) {}

  async createAccount(event: APIGatewayProxyEvent) {
    const data = JSON.parse(event.body)
    this.logger.debug({ data })
    return this.accountsInteractor.createAccount(data)
  }
}