export interface FormularioPago {
    usuario: string,
    montoPagado: number,
    metodoPago: string,
    comentarios: string,
    fecha?: Date,
    aprobado?: boolean,
    revisado?: boolean,
}
