function Mensaje({ mensaje }) {
    return (
      <>
        {mensaje.length > 5 && <p>{mensaje}</p>}
      </>
    );
}
  
export default Mensaje;
  