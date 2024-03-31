import './Botao.css'

const Botao = (props) => {
    return (
        <button className="botao">{props.children}</button>
    )
}

//Foi usando o children para receber o conteúdo, independente se for texto, imagem, icone...
//<button className="botao">{props.texto}</button>

export default Botao