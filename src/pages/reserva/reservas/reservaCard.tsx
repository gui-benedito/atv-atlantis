import { useEffect, useState } from "react";
import ReservaInterface from "../../../interface/reserva";
import style from './style.module.css'
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";
import { GoTrash } from "react-icons/go";

interface ReservaCardProps {
    reservaSelected: ReservaInterface
    onDelete?: (id: number) => void
}

export default function ReservaCard({reservaSelected, onDelete}: ReservaCardProps) {
    const [clienteInfos, setCLienteInfos] = useState<boolean>(false)
    const [dataInicio, setDataInicio] = useState<any>()
    const [dataFinal, setDataFinal] = useState<any>()
    const [reserva, setReserva] = useState<ReservaInterface>()

    const formatarData = (data: any) => {
        const [ano, mes, dia] =  data.split('-')
        return `${dia}/${mes}/${ano}`
    }

    useEffect(() => {
        setReserva(reservaSelected)
        setDataInicio(formatarData(reservaSelected.dataInicio))
        setDataFinal(formatarData(reservaSelected.dataFinal))
    }, [reservaSelected])

    return(
        <div className={style.card_container}>
            <div className={style.main_infos}>
                <div>
                    <span className={style.spanStrong}>Acomodação: </span>{reserva && reserva.hospedagem}
                </div>
                <div className={style.data_container}>
                    <div>
                        <span className={style.spanStrong}>Entrada: </span><span>{dataInicio}</span>
                    </div>
                    <div>
                        <span className={style.spanStrong}>Saída: </span><span>{dataFinal}</span>
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
                        {reserva?.clientes.map(c => (
                            <span>{c.Nome}</span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}