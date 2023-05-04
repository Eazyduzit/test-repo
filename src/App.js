import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent.js';
import Text from './Text.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <MyComponent/>
        <Text/>
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hei og velkommen til An sin første React App.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
