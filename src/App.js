import logo from './logo.svg';
import './App.css';
import Text from './Text.js';
import Button from "./Button.js";
import Users from "./Users.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Text/>

        <Users />
        
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
          Please click me. Im not a virus, trust!
        </a>

        <div className="Buttons">
          <Button />
          <Button />
          <Button />
        </div>

      </header>
    </div>
  );
}

export default App;
