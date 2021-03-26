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
exports.DataHistorialService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const historial_schema_1 = require("../../schema/historial.schema");
const data_correlacion_service_1 = require("../correlacion/data-correlacion.service");
let DataHistorialService = class DataHistorialService {
    constructor(model, correlacionService) {
        this.model = model;
        this.correlacionService = correlacionService;
    }
    async save(historial) {
        const aux = new this.model(historial);
        return aux.save();
    }
    async saveMany(historiales) {
        const aux = new this.model();
        return await aux.collection.insertMany(historiales);
    }
    async findAll(query = {}) {
        return this.model.find(query).exec();
    }
    async findById(id) {
        return this.model.findById(id).exec();
    }
    async findByAccion(accion) {
        return this.model.find({ accion_id: accion }).exec();
    }
    async getPrevious(historial) {
        const correlacion = await this.correlacionService.getCorrelacion(historial);
        return this.model.findOne({ _id: correlacion.previo_historial_id }).exec();
    }
};
DataHistorialService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(historial_schema_1.Historial.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        data_correlacion_service_1.DataCorrelacionService])
], DataHistorialService);
exports.DataHistorialService = DataHistorialService;
//# sourceMappingURL=data-historial.service.js.map