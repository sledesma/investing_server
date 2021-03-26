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
exports.AccionResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const data_accion_service_1 = require("../../1-data-layer/providers/accion/data-accion.service");
const accion_schema_1 = require("../../1-data-layer/schema/accion.schema");
const accion_object_1 = require("../objects/accion.object");
let AccionResolver = class AccionResolver {
    constructor(accionService) {
        this.accionService = accionService;
    }
    async allActions() {
        return this.accionService.findAll();
    }
    async createAction(simbolo, mercado) {
        const aux = new accion_schema_1.Accion();
        aux._active = true;
        aux.created = new Date(Date.now());
        aux.mercado = mercado;
        aux.simbolo = simbolo;
        return this.accionService.save(aux);
    }
};
__decorate([
    graphql_1.Query((returns) => [accion_object_1.AccionObject]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccionResolver.prototype, "allActions", null);
__decorate([
    graphql_1.Mutation((returns) => accion_object_1.AccionObject),
    __param(0, graphql_1.Args('simbolo')),
    __param(1, graphql_1.Args('mercado')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AccionResolver.prototype, "createAction", null);
AccionResolver = __decorate([
    graphql_1.Resolver((of) => accion_object_1.AccionObject),
    __metadata("design:paramtypes", [data_accion_service_1.DataAccionService])
], AccionResolver);
exports.AccionResolver = AccionResolver;
//# sourceMappingURL=accion.resolver.js.map