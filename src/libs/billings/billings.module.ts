import { Logger, Module } from "@nestjs/common";
import { BillingsService } from "./billings.service";
import { BillingsInteractor } from "./billings.interactor";
import { BillingsController } from "./billings.controller";
import { PostgresService } from "../services/postgres.service";

@Module({
  providers: [
    BillingsService,
    BillingsInteractor,
    BillingsController,
    Logger,
    PostgresService
  ]
})
export class BillingsModule {}