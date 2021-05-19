import PlayerCard from "../profile/player-card"
import React from 'react';

class Team extends React.Component {
    render() {
        return (
            <div className="team-page">
                <h1>VALORANT TEAM </h1>
                <div class="row profiles">
                    <div class="col-sm-2 playerprofile"><PlayerCard pic="Player1.jpg" name="Vybes" desc="Flying High" phrases="Trade that?!"  twitter="https://twitter.com/Tyler_cs1"/></div>
                    <div class="col-sm-2 playerprofile"><PlayerCard pic="Player2.jpg" name="PeeKay" desc="ODIN God" phrases="Odin Odin Odin, save the Odin!" insta="https://www.instagram.com/shyam_prag/" youtube="https://www.youtube.com/channel/UCgU9co7v1b1apwg6JMRAEZA" twitter="https://twitter.com/ShyamPrag"/></div>
                    <div class="col-sm-2 playerprofile"><PlayerCard pic="Player3.jpg" name="Yaseen" desc="REYNA SMURF MEN" phrases="Naai that's ping man" insta="https://www.instagram.com/yaseen.levy/" youtube="https://www.youtube.com/channel/UCJTXW0WFMMEixbt2vVjEGFA/videos" twitter="https://twitter.com/yaseen__za"/></div>
                    <div class="col-sm-2 playerprofile"><PlayerCard pic="Player4.jpg" name="Snowee" desc="AimBot.exe" phrases="We just losing our gunfights" insta="https://www.instagram.com/sayed_snow/" twitter="https://twitter.com/sayed_snow"/></div>
                    <div class="col-sm-2 playerprofile"><PlayerCard pic="Player5.jpg" name="YungFayds" desc="IGL" phrases="Ouens Ouens Ouens, naai man" insta="https://www.instagram.com/yungfayds/" youtube="https://www.youtube.com/channel/UCyPwchXRz0lDGHYkZxQ3aGg" twitter="https://twitter.com/Faidhadams"/></div>
                </div>
            </div>
        );
    }
}
export default Team;
