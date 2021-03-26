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
exports.HistorialSchema = exports.Historial = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const accion_schema_1 = require("./accion.schema");
let Historial = class Historial {
};
__decorate([
    mongoose_1.Prop({ type: mongoose_2.SchemaTypes.ObjectId, ref: 'Accion' }),
    __metadata("design:type", accion_schema_1.Accion)
], Historial.prototype, "accion_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], Historial.prototype, "fecha", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Historial.prototype, "apertura", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Historial.prototype, "maximo", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Historial.prototype, "minimo", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Historial.prototype, "cierre", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Historial.prototype, "volumen", void 0);
__decorate([
    mongoose_1.Prop({ default: true }),
    __metadata("design:type", Boolean)
], Historial.prototype, "_active", void 0);
__decorate([
    mongoose_1.Prop({ type: Date, default: Date.now() }),
    __metadata("design:type", Date)
], Historial.prototype, "created", void 0);
Historial = __decorate([
    mongoose_1.Schema({
        collection: 'historial',
    })
], Historial);
exports.Historial = Historial;
exports.HistorialSchema = mongoose_1.SchemaFactory.createForClass(Historial);
//# sourceMappingURL=historial.schema.js.map