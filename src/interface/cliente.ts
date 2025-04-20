import ReservaInterface from "./reserva"

export default interface Cliente {
    id: number,
    Nome: string,
    NomeSocial: string,
    DataNascimento: string,
    DataCadastro: string,
    Telefones: {
        Ddd: string,
        Numero: string
    }[] | null,
    Endereco: {
        Rua: string,
        Bairro: string,
        Cidade: string,
        Estado: string,
        Pais: string,
        CodigoPostal: string
    },
    Documentos: {
        tipo: string,
        numero: string
    }[] | null,
    Dependentes: Cliente[] | null,
    Titular: string | null,
    Reservas: Reservas[]
}

interface Reservas {
    reserva_id: number
}