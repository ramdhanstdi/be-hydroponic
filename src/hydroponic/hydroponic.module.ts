import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HydroponicsService } from './hydroponic.service';
import { HydroponicController } from './hydroponic.controller';
import { Hydroponic } from './hydroponic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hydroponic])],
  providers: [HydroponicsService],
  controllers: [HydroponicController],
})
export class HydroponicModule {}
