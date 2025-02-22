import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";
import Endereco from "../../modelos/endereco";

export default class EditarEndereco extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        console.log('Coletando os dados do novo endereço...')
        let rua = this.entrada.receberTexto('Qual a nova rua?')
        let bairro = this.entrada.receberTexto('Qual o novo bairro?')
        let cidade = this.entrada.receberTexto('Qual a nova cidade?')
        let estado = this.entrada.receberTexto('Qual o novo estado?')
        let pais = this.entrada.receberTexto('Qual o novo país?')
        let codigoPostal = this.entrada.receberTexto('Qual o novo código postal?')
        let endereco = new Endereco(rua,bairro,cidade,estado,pais,codigoPostal)
        this.cliente.setEndereco(endereco)
        this.cliente.Dependentes.forEach(dep => {
            dep.setEndereco(endereco)
        })
    }
}