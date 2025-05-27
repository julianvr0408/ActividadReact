import {useState} from 'react';

function Seleccionador () {
    const [seleccion, setSeleccion] = useState('Opción 1');

    const manejarCambio = (evento) => {
        setSeleccion(evento.target.value);
    };

    return (
      <div>
        <label htmlFor="opciones">Elige una opcion:</label>
        <select id="opciones" value={seleccion} onChange={manejarCambio}>
            <option value="">--Seleccione--</option>
            <option value="opcion1">Opcion 1</option>
            <option value="opcion2">Opcion 2</option>
            <option value="opcion3">Opcion 3</option>
        </select>
        <p>Has seleccionado: {seleccion}</p>
      </div>  
    );
}
export default Seleccionador;