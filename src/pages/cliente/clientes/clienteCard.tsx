import { useState } from "react";
import Cliente from "../../../interface/cliente";
import style from './style.module.css'
import * as GoIcons from "react-icons/go";
import * as AiIcons from "react-icons/ai";
import * as CiIcons from "react-icons/ci";
import Button from "../../../components/button";

interface ClienteCardProps {
    cliente: Cliente;
    onDelete: (id: number) => void
}

export default function ClienteCard({ cliente, onDelete }: ClienteCardProps) {
    const [clienteInfos, setCLienteInfos] = useState<boolean>(false)

    return(
        <div className={style.card_container}>
            <div className={style.main_infos}>
                <div className={style.main_infos_first_column}>
                    <div>
                        <span className={style.spanStrong}>Nome:</span> {cliente.Nome}
                    </div>
                    {cliente.Telefones && cliente.Telefones?.length > 0 ? (
                        <div>
                            <span className={style.spanStrong}>Telefone:</span> ({cliente.Telefones?.map(t => t.Ddd)}) {cliente.Telefones?.map(t => t.Numero)}
                        </div>
                    ) : (
                        <div>
                            <span className={style.spanStrong}>Sem Telefone</span>
                        </div>
                    )}
                    <div>
                        <span className={style.spanStrong}>Nascimento:</span> {cliente.DataNascimento}
                    </div>
                </div>
                <div className={style.icons}>
                    <a href={`cliente/editar/${cliente.id}`} className={style.link_editar}>
                        <CiIcons.CiEdit 
                            className={style.icon}
                            size={20} 
                            color="#2681AE" 
                        />
                    </a>
                    <GoIcons.GoTrash 
                        color="#f1a499" 
                        size={20} 
                        onClick={() => onDelete(cliente.id)}
                        className={style.icon}
                    />
                    {!clienteInfos ? (
                        <AiIcons.AiFillCaretRight 
                            onClick={() => setCLienteInfos(true)} 
                            className={style.icon}
                        />
                    ) : 
                        <AiIcons.AiFillCaretDown 
                            onClick={() => setCLienteInfos(false)} 
                            className={style.icon}
                        />
                    }
                </div>
            </div>

            {clienteInfos && (
                <>
                    <div className={style.more_infos} key={cliente.id}>
                        <div key={`${cliente.id}-${cliente.Nome}`}>
                            <span><span className={style.spanStrong}>Rua:</span> {cliente.Endereco.Rua}</span>&nbsp;
                            <span><span className={style.spanStrong}>Bairro:</span> {cliente.Endereco.Bairro}</span>&nbsp;
                            <span><span className={style.spanStrong}>Cidade:</span> {cliente.Endereco.Cidade}</span>&nbsp;
                            <span><span className={style.spanStrong}>Estado:</span> {cliente.Endereco.Estado}</span>&nbsp;
                            <span><span className={style.spanStrong}>País:</span> {cliente.Endereco.Pais}</span>&nbsp;
                            <span><span className={style.spanStrong}>Código Postal:</span> {cliente.Endereco.CodigoPostal}</span>
                        </div>
                        {cliente.Documentos && (
                            cliente.Documentos.map(d => (
                                <span>{d.tipo}: {d.numero}</span>
                            ))
                        )}
                    </div>
                    {cliente.Reservas.length > 0 && (
                        <Button 
                            href={`/cliente/reserva/${cliente.id}`} 
                            title={"Reservas"} 
                        />
                    )}
                </>
            )}
        </div> 
    )
}
