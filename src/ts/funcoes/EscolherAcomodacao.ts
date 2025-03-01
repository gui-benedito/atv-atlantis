import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import MenuTipoListagemAcomodacoes from "../menus/menuTipoListagemAcomodacoes";
import Acomodacao from "../modelos/acomodacao";

export default class EscolherAcomodacao extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoListagemAcomodacoes()
    }

    processar(): void {
        
    }

    escolherAcomodacao() {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero(`Escolha a nova acomodação...`)
        let acomodacao
        switch(this.opcao) {
            case 1:
                acomodacao = Armazem.InstanciaUnica.Acomodacoes[0]
                return acomodacao
            case 2:
                acomodacao = Armazem.InstanciaUnica.Acomodacoes[1]
                return acomodacao
            case 3:
                acomodacao = Armazem.InstanciaUnica.Acomodacoes[2]
                return acomodacao
            case 4:
                acomodacao = Armazem.InstanciaUnica.Acomodacoes[3]
                return acomodacao
            case 5:
                acomodacao = Armazem.InstanciaUnica.Acomodacoes[4]
                return acomodacao
            case 6:
                acomodacao = Armazem.InstanciaUnica.Acomodacoes[5]
                return acomodacao
            default:
                console.log('Acomodação não encontrada')
        }
    }
}