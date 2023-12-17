import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import React, { useState } from 'react';
import Time from './componentes/Time';

function App() {

  const [membros, setMembros] = useState([])

  const AoNovoMembroAdicionado = (membro) => {
    console.log(membro)
    setMembros([...membros, membro])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoMembroCadastrado={
        membro => AoNovoMembroAdicionado(membro)}
      />
      <Time nome="Programação"/>
      <Time nome="Frontend"/>
      <Time nome="Data Science"/>
    </div>
  );
} 

export default App;
