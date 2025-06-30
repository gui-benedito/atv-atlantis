import { useEffect, useState } from "react";
import ReservaInterface from "../../../interface/reserva";
import style from './style.module.css'
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import { hospedagemService } from "../../../services/hospedagemService";

interface ReservaCardProps {
    reservaSelected: ReservaInterface;
    onDelete?: (id: number) => void;
}

export default function ReservaCard({ reservaSelected, onDelete }: ReservaCardProps) {
    const [clienteInfos, setCLienteInfos] = useState<boolean>(false);
    const [reserva, setReserva] = useState<any>();

    useEffect(() => {
        setReserva(reservaSelected);
    }, [reservaSelected]);

    // Função para formatar a data de check-in
    const formatDate = (date: string) => {
        const data = new Date(date);
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
        const ano = data.getFullYear();
        const hora = String(data.getHours()).padStart(2, '0');
        const minutos = String(data.getMinutes()).padStart(2, '0');
        return `${dia}/${mes}/${ano} ${hora}:${minutos}`;
    };

    return (
        <div className={style.card_container}>
            <div className={style.main_infos}>
                <div>
                    <span className={style.spanStrong}>Acomodação: </span>{reserva && reserva['acomodacao']['nomeAcomodacao']}
                </div>
                <div className={style.data_container}>
                    <div>
                        <span className={style.spanStrong}>Entrada: </span><span>{reserva && formatDate(reserva['checkIn'])}</span>
                    </div>
                </div>
                <div className={style.icon_container}>
                    {onDelete && (
                        <GoTrash 
                            color="#f1a499" 
                            size={20} 
                            onClick={() => onDelete(reserva ? reserva.id : 0)}
                            className={style.icon}
                        />
                    )}
                    {!clienteInfos ? (
                        <AiFillCaretRight 
                            onClick={() => setCLienteInfos(true)} 
                            className={style.icon}
                        />
                    ) : 
                        <AiFillCaretDown 
                            onClick={() => setCLienteInfos(false)} 
                            className={style.icon}
                        />
                    }
                </div>
            </div>
            {clienteInfos && (
                <div className={style.more_infos}>
                    <span className={style.spanStrong}>Clientes:</span>
                    <div className={style.clientes}>
                        <span>{reserva.cliente.nome}</span>
                    </div>
                </div>
            )}
        </div>
    );
}
