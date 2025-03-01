import Armazem from "../dominio/armazem";

export default function BuscarUltimoId() {
    let ultimoId = Armazem.InstanciaUnica.Hospedagens.length <= 0 
        ? 1 
        : Armazem.InstanciaUnica.Hospedagens[-1].getId() + 1
    return ultimoId
}