function TributacionCondicional({ edad, ingresos }) {
    return (
      <div>
        <h3>Evaluación Condicional</h3>
        {edad > 16 && ingresos >= 1000 ? (
          <p>El usuario debe tributar</p>
        ) : (
          <p>El usuario no debe tributar</p>
        )}
      </div>
    );
}
  
export default TributacionCondicional;
  
  