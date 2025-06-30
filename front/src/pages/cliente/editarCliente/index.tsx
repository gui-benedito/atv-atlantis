import { useEffect, useState } from "react";
import Cliente from "../../../interface/cliente";
import style from '../clientes/style.module.css';
import Button from "../../../components/button";
import { Navigate } from "react-router-dom";

export default function EditarCliente() {
    const [redirect, setRedirect] = useState(false);
    const [cliente, setCliente] = useState<Cliente | null>(null);
    const [formData, setFormData] = useState({
        Nome: "",
        nomeSocial: "",
        dataNascimento: "",
        Ddd: "",
        Numero: "",
        rua: "",
        bairro: "",
        cidade: "",
        estado: "",
        Pais: "",
        cep: "",
        TipoDocumento: "",
        NumeroDocumento: ""
    });

    useEffect(() => {
        document.title = 'Cliente'
        const id = window.location.pathname.split("/").pop();
        if (id) {
            const clientes = JSON.parse(localStorage.getItem("clientes") || "[]");
            const clienteFounded = clientes.find((c: Cliente) => Number(c.id) === Number(id));
            if (clienteFounded) {
                setCliente(clienteFounded);
                setFormData({
                    Nome: clienteFounded.Nome,
                    nomeSocial: clienteFounded.nomeSocial,
                    dataNascimento: clienteFounded.dataNascimento,
                    Ddd: clienteFounded.Telefones?.[0].Ddd || "",
                    Numero: clienteFounded.Telefones?.[0].Numero || "",
                    rua: clienteFounded.Endereco.rua,
                    bairro: clienteFounded.Endereco.bairro,
                    cidade: clienteFounded.Endereco.cidade,
                    estado: clienteFounded.Endereco.estado,
                    Pais: clienteFounded.Endereco.Pais,
                    cep: clienteFounded.Endereco.cep,
                    TipoDocumento: clienteFounded.documentos?.[0].tipo || "",
                    NumeroDocumento: clienteFounded.documentos?.[0].numero || ""
                });
            }
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!cliente) return;

        const updatedCliente = {
            id: cliente.id,
            Nome: formData.Nome,
            nomeSocial: formData.nomeSocial,
            dataNascimento: formData.dataNascimento,
            dataCadastro: cliente.dataCadastro,
            Telefones: [{
                Ddd: formData.Ddd,
                Numero: formData.Numero
            }],
            Endereco: {
                rua: formData.rua,
                bairro: formData.bairro,
                cidade: formData.cidade,
                Pais: formData.Pais,
                cep: formData.cep,
                estado: formData.estado
            },
            documentos: [{
                tipo: formData.TipoDocumento,
                numero: formData.NumeroDocumento
            }],
            Titular: null,
            Dependentes: []
        };

        const clientes = JSON.parse(localStorage.getItem("clientes") || "[]");
        const updatedClientes = clientes.map((c: Cliente) => c.id === cliente.id ? updatedCliente : c);
        localStorage.setItem("clientes", JSON.stringify(updatedClientes));

        setRedirect(true);
    };

    if (redirect) {
        return <Navigate to={'/cliente'} />;
    }

    return (
        <>
            <h2>Edição de {cliente?.nome}</h2>
            <form id="cliente-form" className={style.cliente_form} onSubmit={handleSubmit}>
                <div className={style.form_column}>
                    <input
                        type="text"
                        id="Nome"
                        placeholder="Nome"
                        value={formData.Nome}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        id="nomeSocial"
                        placeholder="Nome social"
                        value={formData.nomeSocial}
                        onChange={handleChange}
                    />
                    <input
                        type="date"
                        id="dataNascimento"
                        value={formData.dataNascimento}
                        onChange={handleChange}
                    />
                </div>
                <div className={style.form_column}>
                    <input
                        type="text"
                        id="Ddd"
                        placeholder="DDD"
                        value={formData.Ddd}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        id="Numero"
                        placeholder="Número"
                        value={formData.Numero}
                        onChange={handleChange}
                    />
                </div>
                <div className={style.form_column}>
                    <input
                        type="text"
                        id="rua"
                        placeholder="rua"
                        value={formData.rua}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        id="bairro"
                        placeholder="bairro"
                        value={formData.bairro}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        id="cidade"
                        placeholder="cidade"
                        value={formData.cidade}
                        onChange={handleChange}
                    />
                </div>
                <div className={style.form_column}>
                    <input
                        type="text"
                        id="estado"
                        placeholder="estado"
                        value={formData.estado}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        id="Pais"
                        placeholder="País"
                        value={formData.Pais}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        id="cep"
                        placeholder="Código"
                        value={formData.cep}
                        onChange={handleChange}
                    />
                </div>
                <div className={style.form_column}>
                    <input
                        type="text"
                        id="TipoDocumento"
                        placeholder="Tipo Documento"
                        value={formData.TipoDocumento}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        id="NumeroDocumento"
                        placeholder="Número"
                        value={formData.NumeroDocumento}
                        onChange={handleChange}
                    />
                </div>
                <div className={style.form_button}>
                    <Button title="Editar" type="submit" href={""} />
                </div>
            </form>
        </>
    );
}
