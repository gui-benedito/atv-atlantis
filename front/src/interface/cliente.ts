import ReservaInterface from "./reserva"

export default interface Cliente {
    id: number,
    nome: string,
    nomeSocial: string,
    dataNascimento: string,
    dataCadastro: string,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string,
    cep: string,
    documentos: {
        tipo: string,
        numero: string
    }[] | null,
}

interface Reservas {
    reserva_id: number
}