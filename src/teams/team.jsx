import PlayerCard from "../profile/player-card"
import React from 'react';

class Team extends React.Component {
    render() {
        return (
            <div>
                <h1>VALORANT TEAM </h1>
                <div class="row profiles">
                    <div class="col-sm-2 playerprofile"><PlayerCard pic="Player1.jpg" name="Vybes" desc="Flying High" insta="https://www.instagram.com/tylerxperrang/"/></div>
                    <div class="col-sm-2 playerprofile"><PlayerCard pic="Player2.jpg" name="PeeKay" desc="ODIN Player" insta="https://www.instagram.com/shyam_prag/" /></div>
                    <div class="col-sm-2 playerprofile"><PlayerCard pic="Player3.jpg" name="Yaseen" desc="REYNA SMURF" insta="https://www.instagram.com/yaseen.levy/" /></div>
                    <div class="col-sm-2 playerprofile"><PlayerCard pic="Player4.jpg" name="Snowee" desc="Shoot gun" insta="https://www.instagram.com/sayed_snow/"/></div>
                    <div class="col-sm-2 playerprofile"><PlayerCard pic="Player5.jpg" name="YungFayds" desc="IGL" insta="https://www.instagram.com/yungfayds/" /></div>
                </div>
            </div>
        );
    }
}
export default Team;