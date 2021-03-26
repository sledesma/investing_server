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
exports.DataCorrelacionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const correlacion_schema_1 = require("../../schema/correlacion.schema");
let DataCorrelacionService = class DataCorrelacionService {
    constructor(model) {
        this.model = model;
    }
    async save(correlacion) {
        const aux = new this.model(correlacion);
        return aux.save();
    }
    async getCorrelacion(historial) {
        return this.model.findOne({ historial_id: historial }).exec();
    }
};
DataCorrelacionService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(correlacion_schema_1.Correlacion.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DataCorrelacionService);
exports.DataCorrelacionService = DataCorrelacionService;
//# sourceMappingURL=data-correlacion.service.js.map