import { useEffect, useState } from "react"
import ReservaInterface from "../../../interface/reserva"
import ReservaCard from "./reservaCard"
import style from './style.module.css'
import Button from "../../../components/button"
import Cliente from "../../../interface/cliente"
import { hospedagemService } from "../../../services/hospedagemService"

export default function Reservas() {
    const [reservas, setReservas] = useState<ReservaInterface[]>()
    const [clientes, setClientes] = useState<Cliente[]>()
    const [currentPage, setCurrentPage] = useState(1)
    const [reservasPerPage] = useState(5)

    const indexOfLastReserva = currentPage * reservasPerPage
    const indexOfFirstReserva = indexOfLastReserva - reservasPerPage
    const currentReservas = reservas && reservas.slice(indexOfFirstReserva, indexOfLastReserva)

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    const fetchReservas = async () => {
        const reservas = await hospedagemService.listarHospedagensAtivas()
        if(reservas){
            setReservas(reservas)
        }
        console.log(reservas)
    }

    const fetchClientes = () => {
        const clientesFounded = JSON.parse(localStorage.getItem('clientes') || '[]')
        if (clientesFounded.length > 0) {
            setClientes(clientesFounded)
        }
    }

    const handleDelete = (id: number) => {
        return
    }


    useEffect(() => {
        document.title = 'Reservas'
        fetchReservas()
        fetchClientes()
    }, [])

    return(
        <div className={style.reserva_container}>
            <div className={style.button_container}>
                <h3>Reservas</h3>
                <Button 
                    href={'/reserva/cadastrar'} 
                    title={'Cadastrar'}                
                />
            </div>
            {currentReservas?.map((reserva) => (
                <ReservaCard 
                    reservaSelected={reserva}                    
                    onDelete={handleDelete}                  
                />
            ))}

            {/* Botões de navegação (paginação) */}
            <div className={style.pagination}>
                {Array.from({ length: Math.ceil((reservas?.length ?? 0) / reservasPerPage) }).map((_, index) => (
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