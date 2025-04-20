import { useEffect, useState } from "react";
import Button from "../../../components/button";
import style from "./style.module.css";
import Cliente from "../../../interface/cliente";
import ReservaInterface from "../../../interface/reserva";
import { Navigate } from "react-router-dom";
import mockAcomodacoes from "../../../data/acomodacoes.json";  // Ensure this is correct
import AcomodacaoInterface from "../../../interface/acomodacao";
import Form from "react-bootstrap/esm/Form";

export default function CadastroReserva() {
    const [clientes, setClientes] = useState<Cliente[]>();
    const [clientesHospedagem, setClientesHospedagem] = useState<Cliente[]>([]);
    const [docToAdd, setDocToAdd] = useState<string>("");
    const [acomodacao, setAcomodacao] = useState<ReservaInterface>({
        id: 0,
        dataInicio: "",
        dataFinal: "",
        hospedagem: "",
        clientes: []
    }); 

    const [redirect, setRedirect] = useState<boolean>(false);
    const [hospedagem, setHospedagem] = useState<AcomodacaoInterface[]>([]);

    useEffect(() => {
        const clientesFounded = JSON.parse(localStorage.getItem("clientes") || "[]");
        setClientes(clientesFounded);
        setHospedagem(mockAcomodacoes);  
    }, []);

    const handleAddCliente = () => {
        if (!docToAdd || !clientes) return;

        const clienteToAdd = clientes.find((c) => 
            c.Documentos?.some((d) => d.numero === docToAdd)
        );

        if (!clienteToAdd) {
            alert('Cliente não encontrado')
            setDocToAdd("")
            return
        };

        if (acomodacao.clientes.some(c => c.id === clienteToAdd.id)) return 
        
        setAcomodacao((prev) => ({
            ...prev,
            clientes: [...prev.clientes, clienteToAdd]
        }))

        setClientesHospedagem((prev) => [...prev, clienteToAdd])
            
        setDocToAdd("")
    };

    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        let day = String(today.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

     const getDataFinalMin = () => {
        const dataToString = acomodacao.dataInicio.toString()
        const [ano, mes, dia] = dataToString.split('-')
        const somaDia = Number(dia) + 1
        return `${ano}-${mes}-${somaDia}`
     }

    const handleDataInicio = (date: Date | string) => {
        setAcomodacao((prev) => ({...prev, dataInicio: date}))
    }

    const handleReserva = (e: React.FormEvent) => {
        e.preventDefault();

        if (!acomodacao.dataFinal || !acomodacao.dataInicio) {
            alert('Data de início ou final devem ser selecionadas!')
            return
        }

        if (!acomodacao.hospedagem) {
            alert("Selecione uma acomodação!")
            return
        }

        if (acomodacao.clientes.length <= 0) {
            alert("Adicione um cliente!")
            return
        }

        const reservas = JSON.parse(localStorage.getItem('reservas') || "[]");

        if (reservas.length > 0) {
            const id = reservas[reservas.length - 1].id;
            acomodacao.id = id + 1;
        } else {
            acomodacao.id = 1;
        }

        reservas.push(acomodacao)

        localStorage.setItem('reservas', JSON.stringify(reservas))

        const clientesAtualizados = clientes?.map((cliente) => {
            const clienteHospedado = clientesHospedagem.find((c) => c.id === cliente.id);
            if (clienteHospedado) {
                return {
                    ...cliente,
                    Reservas: [...(cliente.Reservas || []), { reserva_id: acomodacao.id }]
                };
            }
            return cliente;
        });
        
        setClientes(clientesAtualizados);
        
        localStorage.setItem('clientes', JSON.stringify(clientesAtualizados));
        
        setRedirect(true);
    };

    if (redirect) {
        return <Navigate to={'/reserva'} />;
    }

    return (
        <>
            <h2>Cadastro de hospedagem</h2>
            <form id="hospedagem-form" className={style.form_content} onSubmit={handleReserva}>
                <div className={style.data_content}>
                    <div>
                        <label htmlFor="idDataInicio">Data início</label>
                        <input 
                            type="date"
                            id="inDataInicio"
                            onChange={(e) => handleDataInicio(e.target.value)}
                            min={getCurrentDate()}
                        />
                    </div>
                    <div>
                        <label htmlFor="idDataFinal">Data final</label>
                        <input 
                            type="date"
                            id="inDataFinal"
                            onChange={(e) => setAcomodacao((prev) => ({...prev, dataFinal: e.target.value}))}
                            min={getDataFinalMin()}
                            disabled={!acomodacao.dataInicio}
                        />
                    </div>
                </div>
                <Form.Select 
                    aria-label="Selecionar acomodação"
                    onChange={(e) => setAcomodacao((prev) => ({ ...prev, hospedagem: e.target.value }))}
                    className={style.option_acomodacao}
                >
                    <option>Selecione a acomodação</option>
                    {hospedagem && hospedagem.map((h) => (
                        <option key={h.id} value={h.Nome}>{h.Nome}</option>
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
                            <span key={c.id}>{c.Nome}</span>
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
