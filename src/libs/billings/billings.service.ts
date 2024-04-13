import { Injectable, Logger } from '@nestjs/common';
import { PostgresService } from '../services/postgres.service';
import { CreateBillingDto } from '../dto/billings.dto';

@Injectable()
export class BillingsService {
  constructor(
    private logger: Logger,
    private postgres: PostgresService,
  ) {}

  async create(createBillingsDto: CreateBillingDto): Promise<void> {
    this.logger.log('creating billing');

    const {
      fk_account_id,
      billing_notice,
      covered_from,
      covered_to,
      connection_type,
      meter_number,
      previous_reading,
      present_reading,
      consumption,
      current_month_bill,
      arrears,
      total_amount_due,
      due_date,
      disconnection_date,
    } = createBillingsDto;

    const query = `
      INSERT INTO billings
      (fk_account_id,billing_notice,covered_from,covered_to,connection_type,meter_number,previous_reading,present_reading,consumption,current_month_bill,arrears,total_amount_due,due_date,disconnection_date) VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);
    `;

    await this.postgres.client.query(query, [
      fk_account_id,
      billing_notice,
      covered_from,
      covered_to,
      connection_type,
      meter_number,
      previous_reading,
      present_reading,
      consumption,
      current_month_bill,
      arrears,
      total_amount_due,
      due_date,
      disconnection_date,
    ]);

    this.logger.log('successfully created the billing')
  }
}
