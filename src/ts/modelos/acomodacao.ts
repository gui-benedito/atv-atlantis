import { NomeAcomadacao } from "../enumeracoes/NomeAcomodacao"

export default class Acomodacao {
    private nomeAcomadacao: NomeAcomadacao
    private camaSolteiro: number
    private camaCasal: number
    private suite: number
    private climatizacao: Boolean
    private garagem: number
    private capacidade: number

    constructor(nomeAcomadacao: NomeAcomadacao, camaSolteiro: number, camaCasal: number,
        suite: number, climatizacao: Boolean, garagem: number, capacidade: number) {
        this.nomeAcomadacao = nomeAcomadacao
        this.camaSolteiro = camaSolteiro
        this.camaCasal = camaCasal
        this.suite = suite
        this.climatizacao = climatizacao
        this.garagem = garagem
        this.capacidade = capacidade
    }

    public get NomeAcomadacao() { return this.nomeAcomadacao }
    public get CamaSolteiro() { return this.camaSolteiro }
    public get CamaCasal() { return this.camaCasal }
    public get Suite() { return this.suite }
    public get Climatizacao() { return this.climatizacao }
    public get Garagem() { return this.garagem }
    public get Capacidade() {return this.capacidade}

}