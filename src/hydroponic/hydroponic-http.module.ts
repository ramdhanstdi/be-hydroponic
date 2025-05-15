import { Module } from '@nestjs/common';
import { HydroponicModule } from './hydroponic.module';
import { HydroponicsService } from './hydroponic.service';
import { HydroponicController } from './hydroponic.controller';

@Module({
  imports: [HydroponicModule],
  providers: [HydroponicsService],
  controllers: [HydroponicController],
})
export class UserHttpModule {}
