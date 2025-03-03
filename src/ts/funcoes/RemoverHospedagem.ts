import Armazem from "../dominio/armazem";
import RemoverHospedagemCliente from "./RemoverHospedagemCliente";

export default function RemoverHospedagem(id: number): void {
    let armazem = Armazem.InstanciaUnica
    let novasHospedagens = armazem.Hospedagens
        .filter(hospedagem => hospedagem.getId() !== id)
    armazem.setHospedagens(novasHospedagens)

    armazem.Clientes.forEach(cliente => {
        let verificar = cliente.Hospedagens.some(hospedagem => hospedagem.getId())
        if (verificar) {
            RemoverHospedagemCliente(cliente, id)
        }
    })
}