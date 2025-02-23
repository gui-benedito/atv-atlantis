import Processo from "../../abstracoes/processo";
import { TipoDocumento } from "../../enumeracoes/TipoDocumento";
import VerificarDocumento from "../../funcoes/VerificarDocumento";
import Cliente from "../../modelos/cliente";
import Documento from "../../modelos/documento";

export default class CadastroCPF extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente){
        super()
        this.cliente = cliente
        this.execucao = true
    }

    processar(): void {
        while(this.execucao){
            let numero = this.entrada.receberTexto(`Qual o número do cpf?`)
            let verificarDoc = VerificarDocumento(numero)
            if (verificarDoc) {
                console.log('Número de documento já existe...')
                continue
            }
            let dataExpedicao = this.entrada.receberData(`Qual a data de expedição?`)
            let cpf = new Documento(numero, TipoDocumento.CPF, dataExpedicao)
            this.cliente.Documentos.push(cpf)
            this.execucao = false
        }
    }
}