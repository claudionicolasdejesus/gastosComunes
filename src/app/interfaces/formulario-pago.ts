export interface FormularioPago {
    usuario: string,
    montoPagado: number,
    metodoPago: string,
    comentarios: string
    aprobado?: boolean,
    revisado?: boolean,
}
