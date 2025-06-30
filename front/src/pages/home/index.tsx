import { Outlet } from "react-router-dom"
import Navbar from "../../components/navbar"
import style from './styles.module.css'

const Home = () => {
    return(
        <>
            <Navbar />
            <div className={style.main_container}>
                <Outlet />
            </div>
        </>
    )
}

export default Home