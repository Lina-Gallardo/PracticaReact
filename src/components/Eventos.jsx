import React from 'react';

 const Eventos = () => {
   const click= () =>console.log('Hiciste click');
   return(
     <div>
        <h1>Eventos</h1>
        <button className="btn btn-primary m-3" onClick={()=>click()} > Haz click!!</button>
     </div>
   )
 };

 export default Eventos;
