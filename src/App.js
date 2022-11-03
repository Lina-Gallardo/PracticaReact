import Compclase from './components/Compclase';
import Compfuncion from './components/Compfuncion';
import Parrafo from './components/Parrafo';
import Listas from './components/Listas';
import Variables from './components/Variables';
import Eventos from './components/Eventos';
import Estados from './components/Estados';
import Contador from './components/Contador';
import Formulario from './components/Formulario';
function App() {
  return (
    <div className="container">
      <h1>Hola</h1>
      <Formulario/>
      <Compclase></Compclase>
      <Compfuncion></Compfuncion>
      <Parrafo/>
      <Variables/>
      <Eventos/>
      <Estados/>
      <Contador/>
      <Listas></Listas>
    </div>
  );
}

export default App;
