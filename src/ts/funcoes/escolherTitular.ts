import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default function EscolherTitular(id: number) {
    const cliente = Armazem.InstanciaUnica.Clientes.find(c => c.Id === id)
    return cliente || null
}