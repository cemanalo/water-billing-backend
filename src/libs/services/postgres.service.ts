import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client } from 'pg'

@Injectable()
export class PostgresService implements OnModuleInit {
  client: Client

  async onModuleInit() {
    this.client = new Client()
    await this.client.connect();
  }
}