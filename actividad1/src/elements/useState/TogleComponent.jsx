import { useState } from "react";

function TogleComponent(){
    const [isVisible, setIsVisible]= useState(false);
    return(
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Ocultar' : 'Mostrar'} 
            </button>

            {isVisible &&(
                <div>
                    ¡Este contenido se puede mostrar u ocultar!
                </div>
            )}
        </div>
    );
}
export default TogleComponent;