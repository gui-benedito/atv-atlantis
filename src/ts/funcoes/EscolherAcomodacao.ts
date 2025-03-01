import Armazem from "../dominio/armazem";

export default function EscolherAcomodacao(nome: string) {
    let acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    let acomodacao = acomodacoes.find(aco => aco.NomeAcomadacao == nome)
    return acomodacao
}