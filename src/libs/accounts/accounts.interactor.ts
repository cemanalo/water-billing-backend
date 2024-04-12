import { toDto } from '../utils/mapper';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/accounts.dto';
import { Account } from './interfaces/account.interface';
import { Injectable } from '@nestjs/common';

type CreateAccountInput = {
  accountId: string;
  firstName: string;
  lastName: string;
  address: string;
};

@Injectable()
export class AccountsInteractor {
  constructor(private accountsService: AccountsService) {}

  createAccount(input: CreateAccountInput) {
    const mapping = {
      accountId: 'account_id',
      firstName: 'first_name',
      lastName: 'last_name',
      address: 'address',
    };
    return this.accountsService.create(
      toDto<CreateAccountInput, CreateAccountDto>(input, mapping),
    );
  }
}
