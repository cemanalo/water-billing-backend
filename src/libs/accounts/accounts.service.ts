import { Injectable, Logger } from '@nestjs/common';
import { CreateAccountDto } from './dto/accounts.dto';
import { PostgresService } from '../services/postgres.service';

@Injectable()
export class AccountsService {
  constructor(private logger: Logger, private postgres: PostgresService) {}

  // private readonly accounts: Account[] = [];

  // findAll(): Account[] {
  //   return this.accounts
  // }

  async create(createAccountDto: CreateAccountDto): Promise<void> {
    this.logger.log('creating account')
    const { account_id, first_name, last_name, address } = createAccountDto 
    const account = await this.postgres.client.query(`
      INSERT INTO accounts
      (account_id, first_name, last_name, address) VALUES
      ($1, $2, $3, $4)
      `,
      [account_id, first_name, last_name, address]
    )
    this.logger.log('successfully created the account')
    // this.logger.log({ account })
    // return account
  }
}