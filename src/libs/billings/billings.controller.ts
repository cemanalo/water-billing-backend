import { Injectable, Logger } from "@nestjs/common";
import { BillingsInteractor } from "./billings.interactor";
import { APIGatewayProxyEvent, Context } from "aws-lambda";

@Injectable()
export class BillingsController {
  constructor(private logger: Logger, private billingsInteractor: BillingsInteractor) {}

  async createBilling(event: APIGatewayProxyEvent, context: Context) {
    const data = JSON.parse(event.body)
    this.logger.log({ data, description: 'create billing endpoint'}, context)

    return this.billingsInteractor.createBillings(data)
  }
}