import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hydroponic } from './hydroponic.entity';
import { UUID } from 'crypto';
import { CreateHydroponicDto } from './hydroponic.dto';

@Injectable()
export class HydroponicsService {
  constructor(
    @InjectRepository(Hydroponic)
    private hydroponicsRepository: Repository<Hydroponic>,
  ) {}

  findAll(from?: string, to?: string): Promise<Hydroponic[]> {
    const query = this.hydroponicsRepository.createQueryBuilder('hydroponic');
    if (from) {
      query.andWhere('hydroponic.createdAt >= :from', { from });
    }
    if (to) {
      query.andWhere('hydroponic.createdAt <= :to', { to });
    }
    return query.getMany();
  }

  findOne(id: UUID): Promise<Hydroponic | null> {
    return this.hydroponicsRepository.findOneBy({ id });
  }

  async remove(id: UUID): Promise<void> {
    await this.hydroponicsRepository.delete(id);
  }

  async create(data: CreateHydroponicDto): Promise<Hydroponic> {
    const hydroponic = this.hydroponicsRepository.create(data);
    return this.hydroponicsRepository.save(hydroponic);
  }
}
