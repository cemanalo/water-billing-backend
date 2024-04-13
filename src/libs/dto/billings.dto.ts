export type CreateBillingDto = {
  fk_account_id: string
  billing_notice: string
  covered_from: Date
  covered_to: Date
  connection_type: string
  meter_number: string
  previous_reading: number
  present_reading: number
  consumption: number
  current_month_bill: number
  arrears: number
  total_amount_due: number
  due_date: Date
  disconnection_date: Date
}