import PlayerCard from "../profile/player-card"
import React from 'react';

class Team extends React.Component {
    render(){
        return (
            <div>
                <h1>VALORANT TEAM </h1>
                <div class="row profiles">
                    <div class="col-sm-2 playerprofile"><PlayerCard pic="Player1.jpg" name="Vybes" desc="Flying High" /></div>
                    <div class="col-sm-2 playerprofile"><PlayerCard pic="Player2.jpg" name="PeeKay" desc="ODIN Player"/></div>
                    <div class="col-sm-2 playerprofile"><PlayerCard pic="Player3.jpg" name="Yaseen" desc="REYNA SMURF"/></div>
                    <div class="col-sm-2 playerprofile"><PlayerCard pic="Player4.jpg" name="Snowee" desc="Shoot gun"/></div>
                    <div class="col-sm-2 playerprofile"><PlayerCard pic="Player5.jpg" name="YungFayds" desc="IGL"/></div>
                </div>
            </div>
        );
    }
  
}

export default Team;