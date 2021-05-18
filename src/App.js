import logo from './logo.svg';
import './App.css';
import Card from "react-bootstrap/Card";
import PlayerCard from "./profile/player-card";

function App() {
  return (
    <div className="App">
      <h1>SOFTGANG</h1>
      <img src="/ighty.png" alt="logo?" className="rounded mx-auto d-block App-logo" />
      <div class="row profiles">
        <div class="col-sm-2 playerprofile"><PlayerCard pic="Player1.jpg" name="Vibes" /></div>
        <div class="col-sm-2 playerprofile"><PlayerCard pic="Player2.png" name="PeeKay"/></div>
        <div class="col-sm-2 playerprofile"><PlayerCard pic="Player3.png" name="Yaseen"/></div>
        <div class="col-sm-2 playerprofile"><PlayerCard pic="Player4.jpg" name="Snowee"/></div>
        <div class="col-sm-2 playerprofile"><PlayerCard pic="ighty.jpg" name="YungFayds"/></div>
      </div>

      
      
    </div>
  );
}

export default App;
