import { useEffect, useState } from 'react'
import style from './style.module.css'
import { acomodacaoService } from '../../services/acomodacaoService'

export default function Index() {
    const [acomodacoes, setAcomodacoes] = useState<any[]>([])

    const fetchAcomodacoes = async () => {
        const acomodacoes = await acomodacaoService.listarAcomodacoes()
        setAcomodacoes(acomodacoes)
    }

    const imageMap: {[key: string]: string} = {
        'Acomodação simples para casal': '/assets/casal_simples.webp',
        'Acomodação para família com até duas crianças': '/assets/familia_simples.webp',
        'Acomodação para família com até cinco crianças': '/assets/familia_mais.webp',
        'Acomodação para até duas familias, casal e três crianças cada': '/assets/familia_super.webp',
        'Acomodação simples para solteiro(a)': '/assets/solteiro_simples.webp',
        'Acomodação com garagem para solteiro(a)': '/assets/solteiro_mais.webp'
    }


    useEffect(() => {
        document.title = 'Home'
        fetchAcomodacoes()
    },[])

    return(
        <>
            <h2>Bem-vindo(a) ao melhor sistema de gestão de clubes, hotéis e resorts do mundo, o Atlantis :)</h2>
            <h3>Conheça nossas acomodações 	&darr;</h3>
            <div className={style.acomodacao_container}>
                {acomodacoes.map((acomodacao) => (
                    <div className={style.acomodacao_card} key={acomodacao.id}>
                        <img src={imageMap[acomodacao['nomeAcomodacao']]} />
                        <p><span>Nome: </span>{acomodacao['nomeAcomodacao']}</p>
                        <p><span>Cama solteiro: </span>{acomodacao['camaSolteiro']}</p>
                        <p><span>Cama casal: </span>{acomodacao['camaCasal']}</p>
                        <p><span>Suíte: </span>{acomodacao['suite']}</p>
                        <p><span>Climatização: </span>{acomodacao['climatizacao'] ? 'Sim' : 'Não'}</p>
                        <p><span>Garagem: </span>{acomodacao['garagem'] ? 'Sim' : 'Não'}</p>
                    </div>
                ))}
            </div>
        </>
    )
}