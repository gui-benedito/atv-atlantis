import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default function EscolherCliente(documento: string): Cliente | null {
    const cliente = Armazem.InstanciaUnica.Clientes.find(c => c.Documentos.find(d => d.Numero === documento))
    return cliente || null
}