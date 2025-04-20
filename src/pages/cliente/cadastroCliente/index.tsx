import { useState } from 'react'
import Button from '../../../components/button'
import style from '../clientes/style.module.css'
import { Navigate } from 'react-router-dom'

export default function CadastroCliente() {
    const [redirect, setRedirect] = useState(false)
    const [cliente, setCliente] = useState({
        id: 0,
        NomeSocial: "",
        DataNascimento: "",
        DataCadastro: "",
        Telefone: [{
            Ddd: "",
            Numero: ""
        }],
        Endereco: {
            Rua: "",
            Bairro: "",
            Cidade: "",
            Pais: "",
            CodigoPostal: "",
            Estado: ""
        },
        Documentos: [{
            tipo: "",
            numero: ""
        }],
        Titular: null,
        Dependentes: [],
        Reservas: []
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const date = new Date()
        const ano = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        const DataCadastro = `${ano}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`

        const clientes = JSON.parse(localStorage.getItem('clientes') || "[]");

        let novoId = 1;
        if (clientes.length > 0) {
            const lastClient = clientes[clientes.length - 1];
            novoId = lastClient.id + 1;  
        }

        const updatedCliente = {
            ...cliente,
            DataCadastro: DataCadastro,
            id: novoId
        };

        clientes.push(updatedCliente);
        localStorage.setItem('clientes', JSON.stringify(clientes));

        setRedirect(true)
    }

    if (redirect) {
        return <Navigate to={'/cliente'}/>
    }

    return (
        <>
            <h2>Cadastro de cliente</h2>
            <form id="cliente-form" className={style.cliente_form} onSubmit={handleSubmit}>
                <div className={style.form_column}>
                    <div>
                        <input
                            type="text"
                            id="inNome"
                            placeholder='Nome'
                            onChange={(e) => setCliente((prev) => ({ ...prev, Nome: e.target.value }))} 
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="inNomeSocial"
                            placeholder='Nome social'
                            onChange={(e) => setCliente((prev) => ({ ...prev, NomeSocial: e.target.value }))}
                        />
                    </div>
                    <div>
                        <label htmlFor="inNascimento">Nascimento:</label>
                        <input
                            type="date"
                            id="inNascimento"
                            onChange={(e) => setCliente((prev) => ({
                                ...prev,
                                DataNascimento: e.target.value
                            }))}
                        />
                    </div>
                </div>
                <div className={style.form_column}>
                    <div>
                        <input
                            type="text"
                            id="inDdd"
                            placeholder='DDD'
                            onChange={(e) => setCliente((prev) => ({
                                ...prev,
                                Telefone: [{ ...prev.Telefone[0], Ddd: e.target.value }]
                            }))}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="inNumero"
                            placeholder='Número'
                            onChange={(e) => setCliente((prev) => ({
                                ...prev,
                                Telefone: [{ ...prev.Telefone[0], Numero: e.target.value }]
                            }))}
                        />
                    </div>
                </div>
                <div className={style.form_column}>
                    <div>
                        <input
                            type="text"
                            id="inRua"
                            placeholder='Rua'
                            onChange={(e) => setCliente((prev) => ({
                                ...prev,
                                Endereco: { ...prev.Endereco, Rua: e.target.value }
                            }))}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="inBairro"
                            placeholder='Bairro'
                            onChange={(e) => setCliente((prev) => ({
                                ...prev,
                                Endereco: { ...prev.Endereco, Bairro: e.target.value }
                            }))}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="inCidade"
                            placeholder='Cidade'
                            onChange={(e) => setCliente((prev) => ({
                                ...prev,
                                Endereco: { ...prev.Endereco, Cidade: e.target.value }
                            }))}
                        />
                    </div>
                </div>
                <div className={style.form_column}>
                    <div>
                        <input
                            type="text"
                            id="inEstado"
                            placeholder='Estado'
                            onChange={(e) => setCliente((prev) => ({
                                ...prev,
                                Endereco: { ...prev.Endereco, Estado: e.target.value }
                            }))}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="inPais"
                            placeholder='País'
                            onChange={(e) => setCliente((prev) => ({
                                ...prev,
                                Endereco: { ...prev.Endereco, Pais: e.target.value }
                            }))}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="inCodigo"
                            placeholder='Código'
                            onChange={(e) => setCliente((prev) => ({
                                ...prev,
                                Endereco: { ...prev.Endereco, CodigoPostal: e.target.value }
                            }))}
                        />
                    </div>
                </div>
                <div className={style.form_column}>
                    <div>
                        <input
                            type="text"
                            id="inTipo"
                            placeholder='Tipo Documento'
                            onChange={(e) => setCliente((prev) => ({
                                ...prev,
                                Documentos: [{ ...prev.Documentos[0], tipo: e.target.value }]
                            }))}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="inNumero"
                            placeholder='Número'
                            onChange={(e) => setCliente((prev) => ({
                                ...prev,
                                Documentos: [{ ...prev.Documentos[0], numero: e.target.value }]
                            }))}
                        />
                    </div>
                </div>
                <div className={style.form_button}>
                    <Button
                        href={''}
                        title={'Cadastrar'}
                        type={'submit'}
                    />
                </div>
            </form>
        </>
    )
}
