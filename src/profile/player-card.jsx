import Card from "react-bootstrap/Card";
import React from 'react';
import * as Icon from 'react-bootstrap-icons';


class PlayerCard extends React.Component {
  render() {
    return (
      <Card className="player-card" style={{ width: '18rem' }}>
        <div className="inner"><Card.Img variant="top" src={this.props.pic} /> </div>
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>{this.props.desc}</Card.Text>
          <Card.Text><i>"{this.props.phrases}"</i></Card.Text>
          <div className="profile-social">
            {this.props.insta? <a href={this.props.insta}    style={{ textDecoration: 'none' }}> <Icon.Instagram  className="insta"   color="black" size={25} /> </a>:""}
            {this.props.youtube?<a href={this.props.youtube} style={{ textDecoration: 'none' }}> <Icon.Youtube    className="youtube" color="black" size={35} /> </a>:""}
            {this.props.twitter?<a href={this.props.twitter} style={{ textDecoration: 'none' }}> <Icon.Twitter    className="twitter" color="black" size={35} /> </a>:""}
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default PlayerCard;
