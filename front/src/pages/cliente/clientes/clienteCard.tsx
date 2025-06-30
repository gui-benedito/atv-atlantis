import { useState } from "react";
import Cliente from "../../../interface/cliente";
import style from './style.module.css'
import { GoTrash } from "react-icons/go";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import Button from "../../../components/button";

interface ClienteCardProps {
    cliente: Cliente;
    onDelete: (id: number) => void;
}

export default function ClienteCard({ cliente, onDelete }: ClienteCardProps) {
    const [clienteInfos, setCLienteInfos] = useState<boolean>(false);

    // Função para formatar a data de nascimento
    const formatDate = (date: string) => {
        const data = new Date(date);
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
        const ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    };

    return (
        <div className={style.card_container}>
            <div className={style.main_infos}>
                <div className={style.main_infos_first_column}>
                    <div>
                        <span className={style.spanStrong}>Nome:</span> {cliente.nome}
                    </div>
                    <div>
                        <span className={style.spanStrong}>Nascimento:</span> {formatDate(cliente.dataNascimento)}
                    </div>
                </div>
                <div className={style.icons}>
                    <a href={`cliente/editar/${cliente.id}`} className={style.link_editar}>
                        <CiEdit 
                            className={style.icon}
                            size={20} 
                            color="#2681AE" 
                        />
                    </a>
                    <GoTrash 
                        color="#f1a499" 
                        size={20} 
                        onClick={() => onDelete(cliente.id)}
                        className={style.icon}
                    />
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
                <>
                    <div className={style.more_infos} key={cliente.id}>
                        <div key={`${cliente.id}-${cliente.nome}`}>
                            <span><span className={style.spanStrong}>rua:</span> {cliente.rua}</span>&nbsp;
                            <span><span className={style.spanStrong}>bairro:</span> {cliente.bairro}</span>&nbsp;
                            <span><span className={style.spanStrong}>cidade:</span> {cliente.cidade}</span>&nbsp;
                            <span><span className={style.spanStrong}>estado:</span> {cliente.estado}</span>&nbsp;
                            <span><span className={style.spanStrong}>Código Postal:</span> {cliente.cep}</span>
                        </div>
                        {cliente.documentos && (
                            cliente.documentos.map(d => (
                                <span>{d.tipo}: {d.numero}</span>
                            ))
                        )}
                    </div>
                </>
            )}
        </div> 
    );
}
