import Impressor from "../interfaces/impressor";
import Hospedagem from "../modelos/hospedagem";

export default class ImpressorHospedagem implements Impressor {
    private hospedagem: Hospedagem
    constructor(hospedagem: Hospedagem) {
        this.hospedagem = hospedagem
    }

    imprimir(): string {
        let descricao = `Acomodação: ${this.hospedagem.getNomeHospedagem()}\n`
        + `Data de entrada: ${this.hospedagem.getDataInicio()}\n`
        + `Data de saída: ${this.hospedagem.getDataFinal()}\n`
        + `Clientes:\n`
        + `${this.hospedagem.getNomes()}`


        return descricao
    }
}