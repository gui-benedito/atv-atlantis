import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import Endereco from "../../modelos/endereco";
import Telefone from "../../modelos/telefone";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import EscolherTitular from "../../funcoes/escolherTitular";

export default class CadastroClienteDependente extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente){
        super()
        this.cliente = cliente
    }

    processar(): void {
        console.log('Iniciando o cadastro de um novo cliente dependente...')
        let idTitular = this.entrada.receberNumero('Id do titular:')
        let titular = EscolherTitular(idTitular)
        if (titular !== null) {
            let nome = this.entrada.receberTexto('Qual o nome do novo cliente?')
            let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?')
            let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
            let dependente = new Cliente(nome, nomeSocial, dataNascimento)
    
            dependente.Telefones.map(t => t.clonar() as Telefone)
    
            dependente.Endereco = this.cliente.Endereco.clonar() as Endereco
    
            this.processo = new CadastrarDocumentosCliente(dependente)
            this.processo.processar()

            dependente.setTitular(titular)
            titular.Dependentes.push(dependente)
    
            this.cliente.Dependentes.push(dependente)
    
            let armazem = Armazem.InstanciaUnica
            armazem.Clientes.push(dependente)
    
            console.log('Finalizando o cadastro do dependente...')
        } else {
            console.log('Cliente não encontrado...')
        }
    }
}