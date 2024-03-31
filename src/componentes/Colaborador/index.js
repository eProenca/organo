import './Colaborador.css'

// const Colaborador = (props) => {
const Colaborador = ({ nome, imagem, cargo, corDeFundo }) => { //Dessa forma só usa o que precisa
    return (<div className='colaborador'>
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            {/* <img src={props.imagem} alt={props.nome} /> */}
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'>
            {/* <h4>{props.nome}</h4> */}
            {/* <h5>{props.cargo}</h5> */}
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>)
}

export default Colaborador