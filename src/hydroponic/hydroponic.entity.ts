import { UUID } from 'crypto';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hydroponic {
  @PrimaryGeneratedColumn()
  id: UUID;

  @Column()
  ppm: number;

  @Column()
  light: number;

  @Column()
  temperature: number;

  @Column()
  humidity: number;
}
