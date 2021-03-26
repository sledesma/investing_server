"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphqlLayerModule = void 0;
const common_1 = require("@nestjs/common");
const accion_resolver_1 = require("./resolvers/accion.resolver");
const historial_resolver_1 = require("./resolvers/historial.resolver");
const reporte_general_resolver_1 = require("./resolvers/reporte-general.resolver");
let GraphqlLayerModule = class GraphqlLayerModule {
};
GraphqlLayerModule = __decorate([
    common_1.Global(),
    common_1.Module({
        providers: [accion_resolver_1.AccionResolver, historial_resolver_1.HistorialResolver, reporte_general_resolver_1.ReporteGeneralResolver],
    })
], GraphqlLayerModule);
exports.GraphqlLayerModule = GraphqlLayerModule;
//# sourceMappingURL=graphql-layer.module.js.map