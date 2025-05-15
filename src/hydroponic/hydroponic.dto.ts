// hydroponic/dto/create-hydroponic.dto.ts
import { IsNumber } from 'class-validator';

export class CreateHydroponicDto {
  @IsNumber()
  ppm!: number;

  @IsNumber()
  light: number;

  @IsNumber()
  temperature: number;

  @IsNumber()
  humidity: number;
  // Removed invalid property
}
