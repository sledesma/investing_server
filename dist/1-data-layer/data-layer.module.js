"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataLayerModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const accion_schema_1 = require("./schema/accion.schema");
const correlacion_schema_1 = require("./schema/correlacion.schema");
const historial_schema_1 = require("./schema/historial.schema");
const senal_schema_1 = require("./schema/senal.schema");
const data_accion_service_1 = require("./providers/accion/data-accion.service");
const data_correlacion_service_1 = require("./providers/correlacion/data-correlacion.service");
const data_historial_service_1 = require("./providers/historial/data-historial.service");
const data_senal_service_1 = require("./providers/senal/data-senal.service");
let DataLayerModule = class DataLayerModule {
};
DataLayerModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: accion_schema_1.Accion.name, schema: accion_schema_1.AccionSchema },
                { name: historial_schema_1.Historial.name, schema: historial_schema_1.HistorialSchema },
                { name: senal_schema_1.Senal.name, schema: senal_schema_1.SenalSchema },
                { name: correlacion_schema_1.Correlacion.name, schema: correlacion_schema_1.CorrelacionSchema },
            ]),
        ],
        providers: [
            data_accion_service_1.DataAccionService,
            data_historial_service_1.DataHistorialService,
            data_senal_service_1.DataSenalService,
            data_correlacion_service_1.DataCorrelacionService,
        ],
        exports: [
            data_accion_service_1.DataAccionService,
            data_historial_service_1.DataHistorialService,
            data_senal_service_1.DataSenalService,
            data_correlacion_service_1.DataCorrelacionService,
        ],
    })
], DataLayerModule);
exports.DataLayerModule = DataLayerModule;
//# sourceMappingURL=data-layer.module.js.map