export const calcSenialCompraVenta = (
  SenialCompraVenta_Previa,
  SenialCompraVenta_PreviaPrevia,
  CierreCotizacion,
  MediaMovilCotizacion,
  CongruenciaCompra,
): string => {
  if (SenialCompraVenta_Previa !== SenialCompraVenta_PreviaPrevia) {
    return SenialCompraVenta_Previa;
  }
  if (CierreCotizacion > MediaMovilCotizacion) {
    if (CongruenciaCompra == 1) {
      return 'COMPRA';
    } else if (SenialCompraVenta_Previa == 'COMPRA') {
      return 'COMPRA';
    } else {
      return 'VENTA';
    }
  } else {
    return 'VENTA';
  }
};
