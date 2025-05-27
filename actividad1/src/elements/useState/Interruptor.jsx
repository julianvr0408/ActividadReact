import {useState} from 'react';

function Interruptor (){
    const [encendido, setEncendido] = useState(false);
    
    const manejarClick = () => {
        setEncendido(!encendido);
    };
    
    return (
        <div>
            <p>El interruptor esta {encendido ? 'Apagar' : 'Encender'}</p>
        <button onClick={manejarClick}>
            {encendido ? 'Apagar' : 'Encender'}
        </button>
        </div>
    );
}

export default Interruptor;