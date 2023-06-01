import { Button } from './components/button/button.js';
import { Input } from './components/input/input.js';
import { useState } from 'react';

function App() {
  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState();

  //TODO: COMO TRAZER OS VALORES DO INPUT DE VOLTA PARA O FORMULARIO
  //Callback hook?????
  return (
    <div className="formulario">
      <h1>Formulário Simples</h1>
      <Input TipoTexto={"Nome"}></Input>
      <Input TipoTexto={"Sobrenome"}></Input>
      
      <Button Nome={nome} Sobrenome={sobrenome}></Button>
    </div>
  );
}

export default App;