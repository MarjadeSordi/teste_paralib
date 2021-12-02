import React from "react";
import Card from 'react-bootstrap/Card';
import queen from '../../assets/imgcover/queen.png'
import { CardImg } from "./styles";

const CardCover = () => {
  return (
  <CardImg > 
  <Card className="bg-dark text-white">
  <Card.Img src={queen} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Queen experience in concert - Porto Alegre</Card.Title>

  </Card.ImgOverlay>
</Card>
</CardImg>
  );
};

export default CardCover;