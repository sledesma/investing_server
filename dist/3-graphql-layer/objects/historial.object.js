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
exports.HistorialObject = void 0;
const graphql_1 = require("@nestjs/graphql");
let HistorialObject = class HistorialObject {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], HistorialObject.prototype, "id", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], HistorialObject.prototype, "accion_id", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], HistorialObject.prototype, "fecha", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], HistorialObject.prototype, "apertura", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], HistorialObject.prototype, "maximo", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], HistorialObject.prototype, "minimo", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], HistorialObject.prototype, "cierre", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], HistorialObject.prototype, "volumen", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Boolean)
], HistorialObject.prototype, "_active", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], HistorialObject.prototype, "created", void 0);
HistorialObject = __decorate([
    graphql_1.ObjectType()
], HistorialObject);
exports.HistorialObject = HistorialObject;
//# sourceMappingURL=historial.object.js.map