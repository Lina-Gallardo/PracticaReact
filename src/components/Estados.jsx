import React, { useState } from 'react';
const Estados = () => {
  const [texto, setTexto] = useState('Texto inicial desde estado')
  const click=()=>{
    setTexto('Texto modificado desde estado')
  }
  return(
    <div>
      <h2>Estados</h2>
      <h3>{texto}</h3>
      <button className="btn btn-danger" onClick={()=> click()} > Cambiar el texto </button>
    </div>
  )
};

export default Estados;
