function Votar({ edad }) {
    return (
      <div>
        <h3>Verificación de Voto</h3>
        <p>{edad > 18 ? "¡Ya puedes votar!" : "¡Sólo espera con paciencia!"}</p>
      </div>
    );
}
  
export default Votar;