import { useState } from 'react'
import Button from '../../../components/button'
import style from '../clientes/style.module.css'
import { Navigate } from 'react-router-dom'
import { clienteService } from '../../../services/clienteService'

export default function CadastroCliente() {
    const [redirect, setRedirect] = useState(false)
    const [cliente, setCliente] = useState({
        nome: "",
        nomeSocial: "",
        dataNascimento: "",
        dataCadastro: "",
        rua: "",
        bairro: "",
        cidade: "",
        numero: "",
        cep: "",
        estado: "",
        documentos: [{
            tipo: "",
            numeroDoc: ""
        }]
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        await clienteService.cadastrarCliente(cliente)

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
                            onChange={(e) => setCliente((prev) => ({ ...prev, nome: e.target.value }))} 
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="innomeSocial"
                            placeholder='Nome social'
                            onChange={(e) => setCliente((prev) => ({ ...prev, nomeSocial: e.target.value }))}
                        />
                    </div>
                    <div>
                        <label htmlFor="inNascimento">Nascimento:</label>
                        <input
                            type="date"
                            id="inNascimento"
                            onChange={(e) => setCliente((prev) => ({
                                ...prev,
                                dataNascimento: e.target.value
                            }))}
                        />
                    </div>
                </div>

                <div className={style.form_column}>
                    <div>
                        <input
                            type="text"
                            id="inrua"
                            placeholder='rua'
                            onChange={(e) => setCliente((prev) => ({
                                ...prev,
                                Endereco: { ...prev, rua: e.target.value }
                            }))}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="inbairro"
                            placeholder='bairro'
                            onChange={(e) => setCliente((prev) => ({
                                ...prev,
                                Endereco: { ...prev, bairro: e.target.value }
                            }))}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="incidade"
                            placeholder='cidade'
                            onChange={(e) => setCliente((prev) => ({
                                ...prev,
                                Endereco: { ...prev, cidade: e.target.value }
                            }))}
                        />
                    </div>
                </div>
                <div className={style.form_column}>
                    <div>
                        <input
                            type="text"
                            id="inestado"
                            placeholder='estado'
                            onChange={(e) => setCliente((prev) => ({
                                ...prev,
                                Endereco: { ...prev, estado: e.target.value }
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
                                Endereco: { ...prev, Pais: e.target.value }
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
                                Endereco: { ...prev, cep: e.target.value }
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
                                documentos: [{ ...prev.documentos[0], tipo: e.target.value }]
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
                                documentos: [{ ...prev.documentos[0], numero: e.target.value }]
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
