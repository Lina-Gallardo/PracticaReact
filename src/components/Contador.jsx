import React from 'react';
const Contador = () => {
  const [contador, setContador] = React.useState(0)
  const mas= () =>{setContador(contador+1)}
  const menos= () =>{setContador(contador-1)}
  return(
    <div>
      <h2>Contador</h2>
      <h3>Contador: {contador}</h3>
      <h4>
          {contador%2==0? 'Es Par': 'Es Impar'}
      </h4>
      <button className="m-2 btn btn-success" onClick={()=>mas()} >+</button>
      <button className="m-2 btn btn-warning" onClick={()=>menos()}>-</button>
    </div>
  )
};

export default Contador;
