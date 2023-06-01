import { useState } from "react";

const inputStyles = {
  height: "50px",
  width: "250px",
  borderStyle: "bold",
  marginTop: "10px",
  marginLeft: " 10px",
  marginBottom: " 10px",
};

export function Input({ TipoTexto, teste }) {
  const [valor, setValor] = useState('');

  function handleChange(event){
    return setValor(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        className="inputText"
        placeholder={TipoTexto}
        style={inputStyles}
        value={valor}
        onChange={e => handleChange(e)}
      ></input>
    </div>
  );
}
