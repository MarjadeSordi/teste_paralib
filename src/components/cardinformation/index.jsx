import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from "react-bootstrap/ListGroup";
import CalendarIcon from "../../assets/icons/Calendar";
import LocalizationIcon from "../../assets/icons/Localization";
import MoneyIcon from "../../assets/icons/Money";
import { BoxDescripton, Box, TextDescription, TextPrincipal, CardItem, TextPrincipallocal } from "./styles";


const CardInformation = () => {
  return(
  <CardItem> 
  <Card style={{ width: '360px' }}>
   <ListGroup variant="flush">
    <ListGroup.Item> 
    <Box>
       <CalendarIcon />
       <BoxDescripton> 
        <TextPrincipal> Data do evento </TextPrincipal>  
       <TextDescription> 15/10/2021 a 16/10/2021 </TextDescription>
       </BoxDescripton>
        </Box>
        </ListGroup.Item>
    <ListGroup.Item>
    <Box>
      <LocalizationIcon /> 
      <BoxDescripton> 
        <TextPrincipallocal> Local </TextPrincipallocal>  
       <TextDescription> Teatro do Bourbon Country 
        Porto Alegre/RS </TextDescription>
       </BoxDescripton>
      </Box>  
      </ListGroup.Item>
    <ListGroup.Item>
      <Box> 
      <MoneyIcon /> 
      <BoxDescripton> 
        <TextPrincipal> Compre com cartão </TextPrincipal>  
       <TextDescription> e ganhe até 150.000 pontos de volta </TextDescription>
       </BoxDescripton>
      </Box>
      </ListGroup.Item>
  </ListGroup>
</Card>
</CardItem>  )
}

export default CardInformation; 