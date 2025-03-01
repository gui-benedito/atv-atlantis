import Armazem from "../dominio/armazem";
import Hospedagem from "../modelos/hospedagem";

export default function EscolherHospedagem(id: number): Hospedagem | null {
    return Armazem.InstanciaUnica.Hospedagens
        .find(hospedagem => 
            hospedagem.getId() === id
        ) || null
}