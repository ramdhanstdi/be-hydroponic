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
exports.HydroponicController = void 0;
const common_1 = require("@nestjs/common");
const hydroponic_service_1 = require("./hydroponic.service");
const hydroponic_dto_1 = require("./hydroponic.dto");
let HydroponicController = class HydroponicController {
    HydroponicsService;
    constructor(HydroponicsService) {
        this.HydroponicsService = HydroponicsService;
    }
    findAll(from, to) {
        return this.HydroponicsService.findAll(from, to);
    }
    findOne(id) {
        return this.HydroponicsService.findOne(id);
    }
    remove(id) {
        return this.HydroponicsService.remove(id);
    }
    create(data) {
        return this.HydroponicsService.create(data);
    }
};
exports.HydroponicController = HydroponicController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('from')),
    __param(1, (0, common_1.Query)('to')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], HydroponicController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HydroponicController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HydroponicController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hydroponic_dto_1.CreateHydroponicDto]),
    __metadata("design:returntype", Promise)
], HydroponicController.prototype, "create", null);
exports.HydroponicController = HydroponicController = __decorate([
    (0, common_1.Controller)('hydroponics'),
    __metadata("design:paramtypes", [hydroponic_service_1.HydroponicsService])
], HydroponicController);
//# sourceMappingURL=hydroponic.controller.js.map