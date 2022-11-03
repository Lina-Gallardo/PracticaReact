import React, {Fragment} from 'react';

 const Variables = () => {
   const texto1 = 'Buenas tardes'
   let texto2 = 'Cómo estas?'
   const url ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUJBCnUjFMLwUEX8fJh1t9gbxXiBfXM6etQ&usqp=CAU'
   return(
     <Fragment>
        <h2>Variables en JSX, {texto1}, {texto2}</h2>
        <img src={url} alt="Pika"/>
     </Fragment>
   )
};

 export default Variables;
