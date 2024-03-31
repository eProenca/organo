import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    // const times = [
    //     'Programação',
    //     'Front-End',
    //     'Data Science',
    //     'Devops',
    //     'UX e Design',
    //     'Mobile',
    //     'Inovação e Gestão'
    // ]

    const [nome, setNome] = useState('')
    const [cargo, setcargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault(); //Para redefinir o comportamento padrão.
        // console.log('Form foi submetido =>', nome, cargo, imagem, time)
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setcargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colabolador.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setcargo(valor)}
                />
                <CampoTexto 
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true}
                    label="Time"
                    // itens={times}
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao >
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

//Passando o conteúdo ao invés da propriedade.
//<Botao texto="Criar card"></Botao>

export default Formulario