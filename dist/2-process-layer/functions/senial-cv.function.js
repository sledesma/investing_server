"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcSenialCompraVenta = void 0;
const calcSenialCompraVenta = (SenialCompraVenta_Previa, SenialCompraVenta_PreviaPrevia, CierreCotizacion, MediaMovilCotizacion, CongruenciaCompra) => {
    if (SenialCompraVenta_Previa !== SenialCompraVenta_PreviaPrevia) {
        return SenialCompraVenta_Previa;
    }
    if (CierreCotizacion > MediaMovilCotizacion) {
        if (CongruenciaCompra == 1) {
            return 'COMPRA';
        }
        else if (SenialCompraVenta_Previa == 'COMPRA') {
            return 'COMPRA';
        }
        else {
            return 'VENTA';
        }
    }
    else {
        return 'VENTA';
    }
};
exports.calcSenialCompraVenta = calcSenialCompraVenta;
//# sourceMappingURL=senial-cv.function.js.map