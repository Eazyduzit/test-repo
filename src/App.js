import logo from "./logo.svg";
import "./App.css";
import Text from "./Text.js";
import Button from "./Button.js";
import Users from "./Users.js";
import Lists from "./Lists.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Text />

        <Lists />

        <Users />

        <img src={logo} className="App-logo" alt="logo" />
        <p>Hei og velkommen til An sin React App.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Im not a virus, trust me!
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
