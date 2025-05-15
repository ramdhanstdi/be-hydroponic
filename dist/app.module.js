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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const config_1 = require("@nestjs/config");
const hydroponic_entity_1 = require("./hydroponic/hydroponic.entity");
const hydroponic_controller_1 = require("./hydroponic/hydroponic.controller");
const hydroponic_service_1 = require("./hydroponic/hydroponic.service");
let AppModule = class AppModule {
    dataSource;
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                url: process.env.DATABASE_URL,
                entities: [hydroponic_entity_1.Hydroponic],
                synchronize: false,
                extra: {
                    ssl: {
                        rejectUnauthorized: false,
                    },
                },
            }),
            typeorm_1.TypeOrmModule.forFeature([hydroponic_entity_1.Hydroponic]),
        ],
        controllers: [app_controller_1.AppController, hydroponic_controller_1.HydroponicController],
        providers: [app_service_1.AppService, hydroponic_service_1.HydroponicsService],
    }),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], AppModule);
//# sourceMappingURL=app.module.js.map