import { use, useEffect } from "react";

function ComponenteConEfecto() {
    useEffect(() => {
        console.log("Este efecto se ejecuta solo una vez, al montarse el componente");
    },[]);
    return (
        <div>
            <p> Componente montado </p>
        </div>
    );
}
export default ComponenteConEfecto;