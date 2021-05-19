import Card from "react-bootstrap/Card";
import React from 'react';
import * as Icon from 'react-bootstrap-icons';


class PlayerCard extends React.Component {
  render() {
    return (
      <Card className="player-card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.pic} />
        <div className="profile-social">
          <Card.ImgOverlay>
           <a href = {this.props.insta}> <Icon.Instagram color="red" size={75}/> </a>
          </Card.ImgOverlay>
        </div>
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>{this.props.desc}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

}

export default PlayerCard;
