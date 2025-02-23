import Armazem from "../dominio/armazem";

export default function VerificarDocumento(numeroDoc: string) {
    for (const cliente of Armazem.InstanciaUnica.Clientes){
        for (const documento of cliente.Documentos) {
            if (documento.Numero === numeroDoc) {
                return true
            }
        }
    }
    return false
}