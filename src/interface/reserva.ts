import Cliente from "./cliente"

export default interface ReservaInterface {
    id: number
    dataInicio: string | Date
    dataFinal: string | Date
    hospedagem: string
    clientes: Cliente[]
}