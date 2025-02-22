import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default function EscolherDependente(documento: string): Cliente | null {
    for (const titular of Armazem.InstanciaUnica.Clientes) {
        const dependente = titular.Dependentes.find(dep => 
            dep.Documentos.some(doc => doc.Numero === documento)
        )
        if (dependente) {
            return dependente
        }
    }

    return null
}