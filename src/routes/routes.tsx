import { BrowserRouter, Route, Routes as Switch } from "react-router-dom"
import Home from "../pages/home"
import Clientes from "../pages/cliente/clientes"
import CadastroCliente from "../pages/cliente/cadastroCliente"
import CadastroReserva from "../pages/reserva/cadastroReserva"
import Reservas from "../pages/reserva/reservas"
import Index from "../pages/index"
import EditarCliente from "../pages/cliente/editarCliente"
import ReservaCliente from "../pages/reserva/reservas/reservaClientes"

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />}>
                    <Route index path="/" element={<Index />}/>
                    <Route path="cliente" element={<Clientes />} />
                    <Route path='cliente/cadastrar' element={<CadastroCliente />} />
                    <Route path="cliente/editar/:id" element={<EditarCliente />} />
                    <Route path="cliente/reserva/:id" element={<ReservaCliente />} />
                    <Route path="reserva" element={<Reservas />} />
                    <Route path="reserva/cadastrar" element={<CadastroReserva />} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes