import { useState } from "react";
import { Nav, Navbar as BootstrapNavbar, NavDropdown, Container } from "react-bootstrap";
import Button from "../button";
import style from './style.module.css';
import logo from '../../assets/atlantis-logo.webp';
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return(
        <BootstrapNavbar className={style.navbar}>
            <Container className={style.navbar_container}>
                <img src={logo} alt="Logo" />
                <div className={`${style.button_container} ${isMenuOpen ? style.menu_open : ''}`}>
                    <Button href={"/"} title={"Home"} />
                    <Button href={"/cliente"} title={"Clientes"} />
                    <Button href={"/reserva"} title={"Reservas"} />
                </div>
                <div className={style.menu_icon} onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
            </Container>
        </BootstrapNavbar>
    )
}
