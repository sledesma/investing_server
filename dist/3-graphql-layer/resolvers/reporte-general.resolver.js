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
exports.ReporteGeneralResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const config_1 = require("@nestjs/config");
const reporte_general_object_1 = require("../objects/reporte-general.object");
const data_historial_service_1 = require("../../1-data-layer/providers/historial/data-historial.service");
const historial_schema_1 = require("../../1-data-layer/schema/historial.schema");
const senial_cv_function_1 = require("../../2-process-layer/functions/senial-cv.function");
const reporte_general_interface_1 = require("../../common/interfaces/reporte-general.interface");
let ReporteGeneralResolver = class ReporteGeneralResolver {
    constructor(configService, historialService) {
        this.configService = configService;
        this.historialService = historialService;
    }
    async buildReport(idHistorial, senialCvPrevia, senialCvPreviaPrevia) {
        const historial = await this.historialService.findById(idHistorial);
        if (!historial._active)
            return null;
        const options = {
            porcSenialVenta: this.configService.get('PORC_CONGRUENCIA_VENTA'),
            porcSenialCompra: this.configService.get('PORC_CONGRUENCIA_COMPRA'),
        };
        const auxiliarVenta = historial.apertura + historial.apertura * options.porcSenialVenta;
        const congruenciaVenta = historial.maximo > auxiliarVenta ? true : false;
        const auxiliarCompra = historial.apertura - historial.apertura * options.porcSenialCompra;
        const congruenciaCompra = auxiliarCompra > historial.minimo ? true : false;
        const histPrev_1 = await this.historialService.getPrevious(historial);
        const histPrev_2 = histPrev_1 != null
            ? await this.historialService.getPrevious(histPrev_1)
            : null;
        const histPrev_3 = histPrev_2 != null
            ? await this.historialService.getPrevious(histPrev_2)
            : null;
        const mediaMovil = histPrev_1 && histPrev_2 && histPrev_3
            ? (histPrev_1.cierre + histPrev_2.cierre + histPrev_3.cierre) / 3
            : 0;
        const senialCompraVenta = senial_cv_function_1.calcSenialCompraVenta(senialCvPrevia, senialCvPreviaPrevia, historial.cierre, mediaMovil, congruenciaCompra);
        const indicioCambio = senialCompraVenta == senialCvPrevia ? 'S/C' : 'CAMBIO';
        return {
            auxiliarCompra,
            congruenciaCompra,
            auxiliarVenta,
            congruenciaVenta,
            mediaMovil,
            senialCompraVenta,
            indicioCambio,
        };
    }
};
__decorate([
    graphql_1.Query((returns) => reporte_general_object_1.ReporteGeneralObject),
    __param(0, graphql_1.Args('historial_id')),
    __param(1, graphql_1.Args('senial_cv_previa')),
    __param(2, graphql_1.Args('senial_cv_previa_previa')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], ReporteGeneralResolver.prototype, "buildReport", null);
ReporteGeneralResolver = __decorate([
    graphql_1.Resolver((of) => reporte_general_object_1.ReporteGeneralObject),
    __metadata("design:paramtypes", [config_1.ConfigService,
        data_historial_service_1.DataHistorialService])
], ReporteGeneralResolver);
exports.ReporteGeneralResolver = ReporteGeneralResolver;
//# sourceMappingURL=reporte-general.resolver.js.map