import { useEffect, useState } from 'react'
import ClienteCard from './clienteCard'
import style from './style.module.css'
import Cliente from '../../../interface/cliente'
import Button from '../../../components/button'

export default function Clientes() {
    const [clientes, setClientes] = useState<Cliente[]>()
    const [currentPage, setCurrentPage] = useState(1) 
    const [clientesPerPage] = useState(5)  

    const handleDelete = (id: number) => {
        const clientesFiltered = clientes && clientes.filter((f) => f.id !== id)
        setClientes(clientesFiltered)
        localStorage.setItem("clientes", JSON.stringify(clientesFiltered))
    }

    const indexOfLastCliente = currentPage * clientesPerPage
    const indexOfFirstCliente = indexOfLastCliente - clientesPerPage
    const currentClientes = clientes && clientes.slice(indexOfFirstCliente, indexOfLastCliente)

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    useEffect(() => {
        document.title = 'Clientes'
        const clientesData = JSON.parse(localStorage.getItem("clientes") || "[]")
        setClientes(clientesData)
    }, [])

    return (
        <div className={style.acomodacao_container}>
            <div className={style.button_container}>
                <h3>Clientes</h3>
                <Button 
                    href={'/cliente/cadastrar'} 
                    title={'Cadastrar'}                
                />
            </div>

            {currentClientes && currentClientes.map((cliente) => {
                return (
                    <ClienteCard 
                        key={cliente.id}
                        cliente={cliente}
                        onDelete={handleDelete}                  
                    />
                )
            })}

            {/* Botões de navegação (paginação) */}
            <div className={style.pagination}>
                {Array.from({ length: Math.ceil((clientes?.length ?? 0) / clientesPerPage) }).map((_, index) => (
                    <button 
                        key={index + 1} 
                        onClick={() => paginate(index + 1)} 
                        className={currentPage === index + 1 ? style.activePage : ""}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}
