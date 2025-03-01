import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import EscolherAcomodacao from "../../funcoes/EscolherAcomodacao";
import EscolherCliente from "../../funcoes/EscolherCliente";
import Hospedagem from "../../modelos/hospedagem";

export default class CadastrarHospedagem extends Processo {
    private armazem: Armazem
    private capacidade: number
    private nome: string

    constructor(capacidade: number, nome: string) {
        super()
        this.armazem = Armazem.InstanciaUnica
        this.capacidade = capacidade
        this.nome = nome
    }

    processar(): void {
        let clientesHospedados = []
        let buscando = true
        console.log('Iniciando o cadastro de uma nova hospedagem...')
        while(buscando) {
            let cliente = EscolherCliente(this.entrada.receberTexto(`Documento do cliente: `))

            if (cliente) {
                clientesHospedados.push(cliente)

                if(clientesHospedados.length < this.capacidade) {
                    let opcao = this.entrada.receberTexto(`Deseja adicionar mais hospede? (s/n)`).toUpperCase()
                    if(opcao === 'N') {
                        buscando = false
                    }
                } else {
                    console.log(`Limite atingido!`)
                    buscando = false
                }

            } else {
                console.log('Cliente não encontrado!')
            }

        }

        let dataInicio = this.entrada.receberData(`Data de entrada: `)
        let dataFinal  = this.entrada.receberData(`Data de saída: `)
        let acomodacao = EscolherAcomodacao(this.nome)

        if (acomodacao) {
            let hospedagem = new Hospedagem(acomodacao, dataInicio, dataFinal, clientesHospedados)
            this.armazem.Hospedagens.push(hospedagem)
            clientesHospedados.map(c => c.Hospedagens.push(hospedagem))
        }

        console.log(`Finalizando cadastro de hospedagem...`)
    }
}