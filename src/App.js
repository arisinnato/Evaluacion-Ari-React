import logo from './logo.svg';
import './App.css';
import MiComponente from './components/MiComponente';
import InfoUsuario from './components/InfoUsuario';
import VerificarTributacion from './components/VerificarTributacion';
import TributacionCondicional from './components/TributacionCondicional';
import Votar from './components/Votar';
import Mensaje from './components/Mensaje';
import ListaEstudiantes from './components/ListaEstudiantes';
import EstudiantesMedicina from './components/EstudiantesMedicina';


function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
          <h1>Evaluación React</h1>
          <MiComponente />
          <InfoUsuario nombre="Luis" edad={25} />
          <VerificarTributacion edad={20} ingresos={1500} />
          <VerificarTributacion edad={18} ingresos={800} />
          <TributacionCondicional edad={15} ingresos={800} />
          <TributacionCondicional edad={16} ingresos={1500} />
          <Votar edad={17} />
          <Votar edad={20} />
          <Mensaje mensaje="si sirve el mensaje?" />
          <ListaEstudiantes />
          <EstudiantesMedicina />
    </div>
      );
    }


export default App;
