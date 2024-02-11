import Membro from '../Membro'
import './Time.css'

const Time = (props) => {
      const corSecundaria = {backgroundColor: props.corSecundaria }  

  return (

      <section className='time' style={corSecundaria}>
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className='membros'>
        {props.membros.map( membro => 
                            <Membro nome={membro.nome} 
                                    cargo={membro.cargo} 
                                    imagem={membro.imagem} 
                            /> )}
        </div>
      </section>
  )
}

export default Time