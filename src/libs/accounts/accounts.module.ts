import { Logger, Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsInteractor } from './accounts.interactor';
import { AccountsController } from './accounts.controller';
import { PostgresService } from '../services/postgres.service';

@Module({
  providers: [
    AccountsService,
    AccountsInteractor,
    AccountsController,
    Logger,
    PostgresService,
  ],
})
export class AccountsModule {}
