// import { useState } from 'react'
import './CampoTexto.css'

//arrow function {} =>
const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    // let valor = 'Teste'

    // const [valor, setValor] = useState('')

    const aoDigitado = (evento) => {
        // setValor(evento.target.value)
        // console.log(valor)

        props.aoAlterado(evento.target.value) //Para deixar o controle da origem para o chamador
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}></input>
        </div>
    )
    //<input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}></input>
}

export default CampoTexto