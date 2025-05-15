import {
  Controller,
  Get,
  Param,
  Delete,
  ParseUUIDPipe,
  Body,
  Post,
} from '@nestjs/common';
import { HydroponicsService } from './hydroponic.service';
import { Hydroponic } from './hydroponic.entity';
import { UUID } from 'crypto';
import { CreateHydroponicDto } from './hydroponic.dto';

@Controller('hydroponics')
export class HydroponicController {
  constructor(private readonly HydroponicsService: HydroponicsService) {}

  @Get()
  findAll(): Promise<Hydroponic[]> {
    return this.HydroponicsService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<Hydroponic | null> {
    return this.HydroponicsService.findOne(id as UUID);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {
    return this.HydroponicsService.remove(id as UUID);
  }

  @Post()
  create(@Body() data: CreateHydroponicDto): Promise<Hydroponic> {
    return this.HydroponicsService.create(data);
  }
}
