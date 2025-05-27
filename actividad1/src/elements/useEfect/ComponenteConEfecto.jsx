import { useEffect } from "react";

function ComponenteConEfecto() {
    useEffect(() => {
        console.log('Componente montado ');
        return ()=>{
            console.log('componente desmontado');
        };
    }, {});
}
export default ComponenteConEfecto;