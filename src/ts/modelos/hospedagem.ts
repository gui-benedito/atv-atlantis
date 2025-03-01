import Acomodacao from "./acomodacao";
import Cliente from "./cliente";

export default class Hospedagem {
    private acomodacao: Acomodacao
    private dataInicio: Date
    private dataFinal: Date
    private clientes: Cliente[] = []

    constructor(acomodacao: Acomodacao, dataInicio: Date, dataFinal: Date, clientes: Cliente[]) {
        this.acomodacao = acomodacao
        this.dataInicio = dataInicio
        this.dataFinal = dataFinal
        this.clientes =  clientes
    }

    public getAcomodacao() { return this.acomodacao}
    public getClientes() { return this.clientes}

    public getDataInicio() { 
        let dia = this.dataInicio.getDate()
        let mes = this.dataInicio.getMonth() + 1
        let ano = this.dataInicio.getFullYear()
        return `${dia}/${mes}/${ano}`
    }

    public getDataFinal() {
        let dia = this.dataFinal.getDate()
        let mes = this.dataFinal.getMonth() + 1
        let ano = this.dataFinal.getFullYear()
        return `${dia}/${mes}/${ano}`
    }

    public getNomeHospedagem() {
        return this.acomodacao.NomeAcomadacao
    }
    public getNomes() {
        return this.clientes.map(c => c.Nome)
    }

    // public setAcomodacao(acomodacao: Acomodacao) { this.acomodacao = acomodacao}
    // public setDataInicio(dataInicio: Date) { this.dataInicio = dataInicio}
    // public setDataFinal(dataFinal: Date) { this.dataFinal = dataFinal}
    // public setClientes(clientes: Cliente[]) { this.clientes = clientes}
}