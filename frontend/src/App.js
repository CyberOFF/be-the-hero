import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dia 2 - OmniStack 11.0 
          |||
          First App with ReactJS
         </p>
        
        <a
          className="App-link"
          href="https://github.com/Cyberoff"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github
        </a>
      </header>
    </div>
  );
}

export default App;
