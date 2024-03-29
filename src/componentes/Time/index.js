import Membro from '../Membro'
import './Time.css'

const Time = (props) => {
      const corSecundaria = {backgroundColor: props.corSecundaria }  

  return (
    props.membros.length > 0 ?
      <section className='time' style={corSecundaria}>
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className='membros'>
        {props.membros.map( membro => 
                            <Membro corDeFundo={props.corPrimaria}
                                    key={membro.nome} 
                                    nome={membro.nome} 
                                    cargo={membro.cargo} 
                                    imagem={membro.imagem} 
                            /> )}
        </div>
      </section>
      : ''
  )
}

export default Time