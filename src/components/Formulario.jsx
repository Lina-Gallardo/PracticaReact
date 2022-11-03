import React from 'react';

const Formulario = () => {
    //huks
    const [index, setIndex] = React.useState(null);
    const [nombre, setNombre] = React.useState('');
    const [apellido, setApellido] = React.useState('');
    const [lista, setLista] = React.useState([]);
    const registrarDatos = (e)=>{
        e.preventDefault()
        //Validaciones
        if(!nombre.trim()){
          alert('Ingrese el nombre por favor')
          return
        }
        if(!apellido.trim()){
          alert('Ingrese el apellido por favor')
          return
        }
        if(index!=null){
          lista[index].nombre = nombre
          lista[index].apellido = apellido
        }else{
          //Guardar en lista
          setLista([
            ...lista,
            {nombre,apellido}
          ])
        }
      //limpiar inputs
      e.target.reset()
      //Limpiar estados
      setNombre('')
      setApellido('')
      setIndex(null)
     }
     //Actualizar datos
     const editar = (index)=>{
       setNombre(document.getElementById("nombre").value = lista[index].nombre)
       setApellido(document.getElementById("apellido").value = lista[index].apellido)
       setIndex(index);
     }
     //Eliminar datos
     const eliminar = (index)=>{
       lista.splice(index,1);
       if(lista.length==0){
         setLista([])
       }else{
         setLista([...lista]);
       }
     }
     return(
       <div>
          <h1 className="text-center">Registro de usuarios</h1>
          <form onSubmit={registrarDatos}>
              <input id="nombre" onChange={(e)=>setNombre(e.target.value)} type="text" placeholder="Ingrese el Nombre" className="form-control my-2"/>
              <input id="apellido" onChange={(e)=>setApellido(e.target.value)} type="text" placeholder="Ingrese el Apellido" className="form-control my-2"/>
              <div className="d-grid gap-2" >
                  <button className="btn btn-success my-2" type='submit'>Registrar</button>
              </div>
          </form>
          <hr/>
          <h1 className="text-center" >Usuarios registrados</h1>
          <ul className="list-group">
              {
                lista.map(
                  (elemento,index)=>(
                    <li className="list-group-item" key={index}>{elemento.nombre} - {elemento.apellido}
                      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button onClick={()=>editar(index)} className="btn btn-outline-success me-md-2 m-2" >Actualizar</button>
                        <button onClick={()=>eliminar(index)} className="btn btn-outline-danger m-2" >Eliminar</button>
                      </div>
                    </li>
                  )
                )
              }
          </ul>
       </div>
   )
};
 export default Formulario;
