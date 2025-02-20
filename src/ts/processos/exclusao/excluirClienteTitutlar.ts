import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";

export default class ExcluirClienteTitular extends Processo {
    processar(): void {
        console.log(`Iniciando exclusão de cliente.`)
        let id = this.entrada.receberNumero(`Qual id do cliente?`)

        let armazem = Armazem.InstanciaUnica
        armazem.Clientes.splice(id-1, 1)

        console.log(`Finalizando exclusão do cliente...`)
    }
}