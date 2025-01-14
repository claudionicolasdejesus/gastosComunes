import { Residencia } from './residencia';
import { FormularioPago } from './formulario-pago';
export interface HistorialPago {
    residencia: Residencia,
    pago: FormularioPago,
    nro_pago: number,
}
