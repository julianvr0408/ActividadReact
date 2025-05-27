
import Interruptor from './elements/useState/Interruptor';
import Seleccionador from './elements/useState/Seleccionador';
import TogleComponent from './elements/useState/TogleComponent';
import ComponenteMultiple from './elements/useEfect/ComponenteMultiple';
import ComponenteSinDependencias from './elements/useEfect/ComponentesSinDependencias';
import ComponenteConDependenciaNula from './elements/useEfect/ComponenteConDependenciaNula';
import EjemploUseEffect from './elements/useEfect/EjemploUseEffect';
import ComponenteApi from './elements/useEfect/ComponenteApi';
import Componente from './elements/useEfect/Componente';
import ComponenteConEfecto from './elements/useEfect/ComponenteConEfecto';

function App() {
  return (
    <div className="container"> 
      <EjemploUseEffect />
      <Componente />
      <ComponenteConEfecto />
      <ComponenteApi />
      <ComponenteMultiple />
      <ComponenteSinDependencias />
      <ComponenteConDependenciaNula />
      <Interruptor />
      <Seleccionador />
      <TogleComponent />
    </div>
  );
}

export default App;
