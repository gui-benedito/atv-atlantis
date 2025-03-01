import Cliente from "../modelos/cliente";

export default function RemoverHospedagemCliente(cliente: Cliente, id: number): void {
    let hospedagensFiltradas = cliente.Hospedagens.filter(hospedagem => hospedagem.getId() !== hospedagem.getId())
    cliente.setHospedagens(hospedagensFiltradas)
}