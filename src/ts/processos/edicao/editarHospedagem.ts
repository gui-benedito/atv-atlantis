import Processo from "../../abstracoes/processo";
import EscolherAcomodacao from "../../funcoes/EscolherAcomodacao";
import EscolherHospedagem from "../../funcoes/EsolherHospedagem";
import RemoverHospedagemCliente from "../../funcoes/RemoverHospedagemCliente";
import ImpressorHospedagem from "../../impressores/impressorHospedagem";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class EditarHospedagem extends Processo {
    private impressor!: Impressor
    private novosClientes: Cliente[] = []
    constructor() {
        super()
    }

    processar(): void {
        console.log(`Iniciando edição de hospedagem...`)
        let idHospedagem = this.entrada.receberNumero(`Id da hospedagem: `)
        let hospedagem = EscolherHospedagem(idHospedagem)
        if (hospedagem) {
            this.impressor = new ImpressorHospedagem(hospedagem)
            this.impressor.imprimir()

            let escolherAcomodacao = new EscolherAcomodacao()
            let novaAcomodacao = escolherAcomodacao.escolherAcomodacao()

            if (novaAcomodacao == null) {
                console.log(`Acomodação já está reservada`)
                return
            }

            let novaDataEntrada = this.entrada.receberData(`Nova data de entrada: `)
            let novaDataSaida = this.entrada.receberData(`Nova data de saída: `)

            let opcao = this.entrada.receberTexto(`Alterar clientes?(s/n)`).toUpperCase()
            if (opcao == 'S') {
                let clientes = hospedagem.getClientes()
                clientes.forEach(cliente => {
                    console.log(cliente.Nome)
                    opcao = this.entrada.receberTexto(`Excluir cliente?(s/n)`).toUpperCase()

                    if(opcao === "S") {
                        RemoverHospedagemCliente(cliente, hospedagem.getId())
                    } else {
                        this.novosClientes.push(cliente)
                    }
                })

                while(this.novosClientes.length < hospedagem.getCapacidade()){
                    let opcao2 = this.entrada.receberTexto(`Deseja adicionar clientes?(s/n): `).toUpperCase

                }

            } 
            hospedagem.setAcomodacao(novaAcomodacao)
            hospedagem.setDataInicio(novaDataEntrada)
            hospedagem.setDataFinal(novaDataSaida)
            hospedagem.setClientes(this.novosClientes)

        } else {
            console.log(`Hospedagem não encontrada`)
        }
    }
}