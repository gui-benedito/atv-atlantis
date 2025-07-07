import { useEffect, useState } from "react";
import Cliente from "../../../interface/cliente";
import ReservaInterface from "../../../interface/reserva";
import ReservaCard from "./reservaCard";
import style from './style.module.css'

export default function ReservaCliente() {
    const [cliente, setCliente] = useState<Cliente | null>(null)
    const [reservas, setReservas] = useState<ReservaInterface[]>([])

    const fetchCliente = () => {
        const id = window.location.pathname.split("/").pop()
        const cliente = JSON.parse(localStorage.getItem('clientes') || '').find((c: Cliente) => c.id == Number(id))
        const reservasFounded: ReservaInterface[] = JSON.parse(localStorage.getItem('reservas') || '').filter((r:ReservaInterface) => r.clientes.find(c => c.id === cliente.id))
        setReservas(reservasFounded)
        setCliente(cliente)
    }

    const handleDelete = () => {}

    useEffect(() => {
        document.title = 'Reservas'
        fetchCliente()
    }, [])

    return (
        <div className={style.reserva_container}>
            <h3>Reservas de {cliente?.Nome}</h3>
            {reservas.length > 0 && (
                reservas.map((reserva) => (
                    <ReservaCard 
                        key={reserva.id} 
                        reservaSelected={reserva} 
                        // onDelete={handleDelete}                
                    />
                ))
            )}
        </div>
    )
}