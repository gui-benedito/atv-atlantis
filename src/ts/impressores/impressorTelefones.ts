import Impressor from "../interfaces/impressor";
import Telefone from "../modelos/telefone";
import ImpressorTelefone from "./impressorTelefone";

export default class ImpressorTelefones implements Impressor {
    private telefones: Telefone[]
    private impressor!: Impressor

    constructor(telefones: Telefone[]) {
        this.telefones = telefones
    }

    imprimir(): string {
        let impressao = ``
        for (let i = 0; i < this.telefones.length; i++) {
            this.impressor = new ImpressorTelefone(this.telefones[i])
            if (i === 0) {
                impressao += `${this.impressor.imprimir()}`
            } else {
                impressao += `\n${this.impressor.imprimir()}`
            }
        }
        return impressao
    }
}