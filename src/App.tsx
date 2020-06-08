import * as React from "react";
import axios from "axios";
import "./App.css";
import { Map } from "./components/Map";
import { Detail } from "./components/Detail";
import { KostContext } from "./context/kost";
import { Kost } from "./interfaces/Kost";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

function App() {
  const [kost, setKost] = React.useState<Kost | null>(null);

  return (
    <KostContext.Provider value={{ kost, setKost }}>
      <div className="app">
        <div className="left-content">
          <header className="app-header">
            <h1>GIS - Kost Bali</h1>
          </header>
          <Map />
        </div>
        <Detail />
      </div>
    </KostContext.Provider>
  );
}

export default App;
