import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PGDataSource } from './databases/pg-typeorm/ormconfig.js';
import { entities } from './databases/pg-typeorm/entities/index.js';

@Module({
  imports: [
    TypeOrmModule.forRoot(PGDataSource.options),
    TypeOrmModule.forFeature(entities),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
