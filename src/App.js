import "./App.css";
import Button from "./Button.js";
import Users from "./Users.js";
import Lists from "./Lists.js";

import { PrimaryButton } from "@sikt/sds-button";
import { SpinnerIcon } from "@sikt/sds-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PrimaryButton icon={
                  <SpinnerIcon
                  style={{
                    fontSize: "calc(32rem / 16)",
                  }}
                />
        }>Hola, Mundo!</PrimaryButton>

        
        <Lists />

        <Users />

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
