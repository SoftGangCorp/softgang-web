import Card from "react-bootstrap/Card";
import React from 'react';

class PlayerCard extends React.Component {
    render(){
        return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={this.props.pic} />
                <Card.Body>
                  <Card.Title>{this.props.name}</Card.Title>
                  <Card.Text>{this.props.desc}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
  
}

export default PlayerCard;
