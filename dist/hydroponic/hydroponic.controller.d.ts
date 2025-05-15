import { HydroponicsService } from './hydroponic.service';
import { Hydroponic } from './hydroponic.entity';
import { CreateHydroponicDto } from './hydroponic.dto';
export declare class HydroponicController {
    private readonly HydroponicsService;
    constructor(HydroponicsService: HydroponicsService);
    findAll(): Promise<Hydroponic[]>;
    findOne(id: string): Promise<Hydroponic | null>;
    remove(id: string): Promise<void>;
    create(data: CreateHydroponicDto): Promise<Hydroponic>;
}
