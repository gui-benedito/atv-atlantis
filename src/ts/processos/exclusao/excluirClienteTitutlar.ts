import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import EscolherCliente from "../../funcoes/EscolherCliente";

export default class ExcluirClienteTitular extends Processo {
    processar(): void {
        console.log(`Iniciando exclusão de cliente.`)
        let documentoCliente = this.entrada.receberTexto('Documento do cliente:')
        let cliente = EscolherCliente(documentoCliente)
        if (cliente) {
            let docsCliente = cliente?.Documentos.map(c => c.Numero)

            let armazem = Armazem.InstanciaUnica
            let indiceCliente = armazem.Clientes.findIndex(cliente => 
                cliente.Documentos.some(doc => docsCliente?.includes(doc.Numero))
            )
            armazem.Clientes.splice(indiceCliente, 1) 
    
            console.log(`Finalizando exclusão do cliente...`)
        } else {
            console.log('Cliente não encontrado')
        }
    }
}