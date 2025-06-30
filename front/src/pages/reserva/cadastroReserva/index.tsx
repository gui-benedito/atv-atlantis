import { useEffect, useState } from "react";
import Button from "../../../components/button";
import style from "./style.module.css";
import Cliente from "../../../interface/cliente";
import ReservaInterface from "../../../interface/reserva";
import { Navigate } from "react-router-dom";
import AcomodacaoInterface from "../../../interface/acomodacao";
import Form from "react-bootstrap/esm/Form";
import { acomodacaoService } from "../../../services/acomodacaoService";
import { clienteService } from "../../../services/clienteService";
import { hospedagemService } from "../../../services/hospedagemService";

export default function CadastroReserva() {
    const [clientes, setClientes] = useState<Cliente[]>();
    const [clientesHospedagem, setClientesHospedagem] = useState<Cliente[]>([]);
    const [docToAdd, setDocToAdd] = useState<string>("");
    const [acomodacao, setAcomodacao] = useState<any>({
        acomodacaoId: 0,
    }); 

    const [redirect, setRedirect] = useState<boolean>(false);
    const [hospedagem, setHospedagem] = useState<any[]>([]);

    const fetchAcomodacoes = async () => {
        const acomodacoes = await acomodacaoService.listarAcomodacoes()
        setHospedagem(acomodacoes)
    }

    const fecthClientes = async () => {
            const clientesFounded = await clienteService.getClientes()
            if (clientesFounded){
                setClientes(clientesFounded)
            }
            console.log(clientesFounded)
        }

    useEffect(() => {
        fetchAcomodacoes()
        fecthClientes()
    }, []);

    const handleAddCliente = () => {
        if (!docToAdd || !clientes) return;

        const clienteToAdd = clientes.find((c) => 
            c.documentos?.some((d) => d.numero === docToAdd)
        );

        if (!clienteToAdd) {
            alert('Cliente não encontrado')
            setDocToAdd("")
            return
        };
            
        setDocToAdd("")
    };

    const handleReserva = async (e: React.FormEvent) => {
        e.preventDefault();

        const body = {
            acomodacaoId: Number(acomodacao.acomodacaoId),
            documentoCliente: docToAdd
        }

        await hospedagemService.registrarHospedagem(body)

        setRedirect(true);
    };

    if (redirect) {
        return <Navigate to={'/reserva'} />;
    }

    return (
        <>
            <h2>Cadastro de hospedagem</h2>
            <form id="hospedagem-form" className={style.form_content} onSubmit={handleReserva}>
                <Form.Select 
                    aria-label="Selecionar acomodação"
                    onChange={(e) => setAcomodacao((prev: any) => ({ ...prev, acomodacaoId: e.target.value }))}
                    className={style.option_acomodacao}
                >
                    <option>Selecione a acomodação</option>
                    {hospedagem && hospedagem.map((h) => (
                        <option key={h.id} value={h.id}>{h['nomeAcomodacao']}</option>
                    ))}
                </Form.Select>
                <div className={style.clientes_content}>
                    <input 
                        type="text" 
                        id="inCliente" 
                        placeholder="Documento do cliente" 
                        value={docToAdd}
                        className={style.clienteDoc_input}
                        onChange={(e) => setDocToAdd(e.target.value)}
                    />
                    <Button 
                        href={""} 
                        title={"Adicionar"} 
                        type={"button"}
                        onClick={handleAddCliente}
                    />
                </div>
                {clientesHospedagem && (
                    <div id="inClientes" className={style.inClientes}>
                        {clientesHospedagem.map((c) => (
                            <span key={c.id}>{c['nome']}</span>
                        ))}
                    </div>
                )}
                <div className={style.confirma_button}>
                    <Button 
                        href={""} 
                        title={"Confirmar"} 
                        type={"submit"}
                    />
                </div>
            </form>
        </>
    );
}
