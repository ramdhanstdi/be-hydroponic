"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HydroponicsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const hydroponic_entity_1 = require("./hydroponic.entity");
let HydroponicsService = class HydroponicsService {
    hydroponicsRepository;
    constructor(hydroponicsRepository) {
        this.hydroponicsRepository = hydroponicsRepository;
    }
    findAll(from, to) {
        const query = this.hydroponicsRepository.createQueryBuilder('hydroponic');
        if (from) {
            query.andWhere('hydroponic.createdAt >= :from', { from });
        }
        if (to) {
            query.andWhere('hydroponic.createdAt <= :to', { to });
        }
        return query.getMany();
    }
    findOne(id) {
        return this.hydroponicsRepository.findOneBy({ id });
    }
    async remove(id) {
        await this.hydroponicsRepository.delete(id);
    }
    async create(data) {
        const hydroponic = this.hydroponicsRepository.create(data);
        return this.hydroponicsRepository.save(hydroponic);
    }
};
exports.HydroponicsService = HydroponicsService;
exports.HydroponicsService = HydroponicsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(hydroponic_entity_1.Hydroponic)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HydroponicsService);
//# sourceMappingURL=hydroponic.service.js.map