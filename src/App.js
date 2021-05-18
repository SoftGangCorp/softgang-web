import logo from './logo.svg';
import './App.css';
import Card from "react-bootstrap/Card";
import PlayerCard from "./profile/player-card";

function App() {
  return (
    <div className="App">
      <h1>SOFTGANG</h1>
      <img src={process.env.PUBLIC_URL + "/ighty.png"} alt="logo?" className="rounded mx-auto d-block App-logo" />
      <div class="row profiles">
        <div class="col-sm-2 playerprofile"><PlayerCard name="Sayed"/></div>
        <div class="col-sm-2 playerprofile"><PlayerCard name="PeeKay"/></div>
        <div class="col-sm-2 playerprofile"><PlayerCard name="Sayed"/></div>
        <div class="col-sm-2 playerprofile"><PlayerCard name="PeeKay"/></div>
        <div class="col-sm-2 playerprofile"><PlayerCard name="Sayed"/></div>
      </div>

      
      
    </div>
  );
}

export default App;
