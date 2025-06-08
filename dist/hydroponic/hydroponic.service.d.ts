import { Repository } from 'typeorm';
import { Hydroponic } from './hydroponic.entity';
import { UUID } from 'crypto';
import { CreateHydroponicDto } from './hydroponic.dto';
export declare class HydroponicsService {
    private hydroponicsRepository;
    constructor(hydroponicsRepository: Repository<Hydroponic>);
    findAll(from?: string, to?: string): Promise<Hydroponic[]>;
    findOne(id: UUID): Promise<Hydroponic | null>;
    remove(id: UUID): Promise<void>;
    create(data: CreateHydroponicDto): Promise<Hydroponic>;
}
