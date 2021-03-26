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
exports.CorrelacionSchema = exports.Correlacion = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Correlacion = class Correlacion {
};
__decorate([
    mongoose_1.Prop({ type: mongoose_2.SchemaTypes.ObjectId, ref: 'Historial' }),
    __metadata("design:type", Object)
], Correlacion.prototype, "historial_id", void 0);
__decorate([
    mongoose_1.Prop({ type: mongoose_2.SchemaTypes.ObjectId, ref: 'Historial' }),
    __metadata("design:type", Object)
], Correlacion.prototype, "previo_historial_id", void 0);
Correlacion = __decorate([
    mongoose_1.Schema({
        collection: 'correlaciones',
    })
], Correlacion);
exports.Correlacion = Correlacion;
exports.CorrelacionSchema = mongoose_1.SchemaFactory.createForClass(Correlacion);
//# sourceMappingURL=correlacion.schema.js.map