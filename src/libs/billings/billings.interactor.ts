import { Injectable, Logger } from '@nestjs/common';
import { BillingsService } from './billings.service';
import { toDto } from '../utils/mapper';

type CreateBillingInput = {
  fkAccountId: string;
  billingNotice: string;
  coveredFrom: Date;
  coveredTo: Date;
  connectionType: string;
  meterNumber: string;
  previousReading: number;
  presentReading: number;
  consumption: number;
  currentMonthBill: number;
  arrears: number;
  totalAmountDue: number;
  dueDate: Date;
  disconnectionDate: Date;
};

@Injectable()
export class BillingsInteractor {
  constructor(
    private logger: Logger,
    private billingsService: BillingsService,
  ) {}

  createBillings(input: CreateBillingInput) {
    const mapping = {
      fkAccountId: 'fk_account_id',
      billingNotice: 'billing_notice',
      coveredFrom: 'covered_from',
      coveredTo: 'covered_to',
      connectionType: 'connection_type',
      meterNumber: 'meter_number',
      previousReading: 'previous_reading',
      presentReading: 'present_reading',
      consumption: 'consumption',
      currentMonthBill: 'current_month_bill',
      arrears: 'arrears',
      totalAmountDue: 'total_amount_due',
      dueDate: 'due_date',
      disconnectionDate: 'disconnection_date',
    };

    return this.billingsService.create(toDto(input, mapping));
  }
}
