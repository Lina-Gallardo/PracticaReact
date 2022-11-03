import React, {useState} from 'react'
const Listas = ()=> {
  const estadoInicial = ["Elemento 1","Elemento 2","Elemento 3","Elemento 4"];
  const estadoInicialObj =[
    {id: 1, texto: "Elemento 1"},
    {id: 2, texto: "Elemento 2"},
    {id: 3, texto: "Elemento 3"},
    {id: 4, texto: "Elemento 4"}
  ]
  const [lista, setLista] = useState(estadoInicial);
  const [listao, setListao] = useState(estadoInicialObj);
  const agregar =()=>{
    setListao([
      ...listao, //operador de operacion
      {id: 5, texto: 'Elemento 5'} // Elemento nuevo
    ])
  }
  return(
    <div>
      <h1>Listas</h1>
      <h2>Array</h2>
      <ul>
        {
           lista.map((elemento,index)=>(<li key={index}>{elemento}</li>))
        }
      </ul>
      <h2>Lista de objetos</h2>
      <button onClick={()=>agregar()}>Agregar</button>
      <ol>
        {
          listao.map((elemento)=>(<li key={elemento.id}>{elemento.texto}</li>))
        }
      </ol>
    </div>
  )
}
export default Listas
