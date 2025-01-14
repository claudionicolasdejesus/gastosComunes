import { FormularioPago } from './formulario-pago';
import { User } from './user';
export interface Residencia {
    nro_residencia: number,
    cuenta: FormularioPago,
    usuario: User,
    estado: string,
    departamento?: boolean,
    piso?: number,
}
