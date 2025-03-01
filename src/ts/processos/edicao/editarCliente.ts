import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";
import Armazem from "../../dominio/armazem";
import Impressor from "../../interfaces/impressor";
import EscolherCliente from "../../funcoes/EscolherCliente";
import EditarDocumentos from "./editarDocumentos";
import EditarEndereco from "./editarEndereco";
import EditarTelefone from "./editarTelefones";

export default class EditarCliente extends Processo {
    constructor() {
        super()
    }

    processar(): void {
        console.log('Iniciando a edição de um cliente...')
        const documento = this.entrada.receberTexto('Documento do cliente: ')
        const cliente = EscolherCliente(documento)
        if (cliente) {
            const nome = this.entrada.receberTexto('Novo nome: ')
            const nomeSocial = this.entrada.receberTexto('Novo nomeSocial: ')
            const novaDataNascimento = this.entrada.receberData('Nova data de nascimento(dd/MM/aaaa): ')

            cliente.setNome(nome)
            cliente.setNomeSocial(nomeSocial)
            cliente.setDataNascimento(novaDataNascimento)

            this.processo = new EditarDocumentos(cliente)
            this.processo.processar()

            if (cliente.Titular === undefined) {
                this.processo = new EditarEndereco(cliente)
                this.processo.processar()

                this.processo = new EditarTelefone(cliente)
                this.processo.processar()
            }

            console.log('Finalizando edição...')

        } else {
            console.log('Cliente não encontrado...')
        }
    }
}