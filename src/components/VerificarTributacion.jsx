function VerificarTributacion({ edad, ingresos }) {
    const debeTributar = edad > 16 && ingresos >= 1000;
  
    return (
      <div>
        <h3>Verificación de Tributación</h3>
        <p>Edad: {edad}</p>
        <p>Ingresos: €{ingresos}</p>
        <p>{debeTributar ? "Debe tributar" : "No debe tributar"}</p>
      </div>
    );
  }
  
  export default VerificarTributacion;