import { useEffect } from 'react'
import acomodacoes from '../../data/acomodacoes.json'
import style from './style.module.css'

export default function Index() {
    useEffect(() => {
        document.title = 'Home'
    },[])

    return(
        <>
            <h2>Bem-vindo(a) ao melhor sistema de gestão de clubes, hotéis e resorts do mundo, o Atlantis :)</h2>
            <h3>Conheça nossas acomodações 	&darr;</h3>
            <div className={style.acomodacao_container}>
                {acomodacoes.map((acomodacao) => (
                    <div className={style.acomodacao_card} key={acomodacao.id}>
                        <img src={acomodacao.img} />
                        <p><span>Nome: </span>{acomodacao.Nome}</p>
                        <p><span>Cama solteiro: </span>{acomodacao['Cama solteiro']}</p>
                        <p><span>Cama casal: </span>{acomodacao['Cama casal']}</p>
                        <p><span>Suíte: </span>{acomodacao['Suíte']}</p>
                        <p><span>Climatização: </span>{acomodacao['Climatização']}</p>
                        <p><span>Garagem: </span>{acomodacao.Garagem}</p>
                    </div>
                ))}
            </div>
        </>
    )
}