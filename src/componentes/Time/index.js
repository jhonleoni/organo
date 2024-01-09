import './Time.css'

const Time = (props) => {
      const corSecundaria = {backgroundColor: props.corSecundaria }  

  return (

      <section className='time' style={corSecundaria}>
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      </section>
  )
}

export default Time