import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import Endereco from "../../modelos/endereco";
import Telefone from "../../modelos/telefone";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import EscolherCliente from "../../funcoes/EscolherCliente";

export default class CadastroClienteDependente extends Processo {
    constructor(){
        super()
    }

    processar(): void {
        let armazem = Armazem.InstanciaUnica

        if (armazem.Clientes.length === 0) {
            console.log('Não há clientes titulares cadastrados...')
        } else {
            let documentoDependente = this.entrada.receberTexto('Documento do dependente:')
            let titular = EscolherCliente(documentoDependente)
            if (titular) {
                let nome = this.entrada.receberTexto('Qual o nome do novo cliente?')
                let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?')
                let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
                let dependente = new Cliente(nome, nomeSocial, dataNascimento)
        
                dependente.Telefones.map(t => t.clonar() as Telefone)
        
                dependente.Endereco = titular.Endereco.clonar() as Endereco
        
                this.processo = new CadastrarDocumentosCliente(dependente)
                this.processo.processar()
    
                dependente.setTitular(titular)
                titular.Dependentes.push(dependente)
            
                armazem.Clientes.push(dependente)
        
                console.log('Finalizando o cadastro do dependente...')
            }
        }
    }
}