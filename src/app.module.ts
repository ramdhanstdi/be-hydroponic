import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ConfigModule, ConfigModuleOptions } from '@nestjs/config';
import { Hydroponic } from './hydroponic/hydroponic.entity';
import { HydroponicController } from './hydroponic/hydroponic.controller';
import { HydroponicsService } from './hydroponic/hydroponic.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true } as ConfigModuleOptions),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Hydroponic],
      synchronize: false,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
    TypeOrmModule.forFeature([Hydroponic]),
  ],
  controllers: [AppController, HydroponicController],
  providers: [AppService, HydroponicsService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
