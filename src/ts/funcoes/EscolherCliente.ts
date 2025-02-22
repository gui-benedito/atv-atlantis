import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default function EscolherCliente(numero: string): Cliente | null {
    for (const cliente of Armazem.InstanciaUnica.Clientes) {
        for (const documento of cliente.Documentos) {
            if (documento.Numero == numero) {
                return cliente
            }
        }
    } 
    return null
}