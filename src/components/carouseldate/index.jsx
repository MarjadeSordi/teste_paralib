import React from 'react'; 
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import {  CarouselCss, Box, BoxTextPrincipal, LinkSeeAll, TextSelect, DateforBoxLight, DayforBoxLight } from './styles';

const CarouselDate = () => {
  return (
    <>
<CarouselCss> 
  <BoxTextPrincipal>
  <TextSelect> selecione a data</TextSelect>  <LinkSeeAll href='#'>Ver Todas </LinkSeeAll> </BoxTextPrincipal>
<Carousel>
  <Carousel.Item>
    <Box> 

   <Button variant="outline-primary"> 
   <DateforBoxLight> 20/12 - 12:30</DateforBoxLight> 
   <DayforBoxLight> qui </DayforBoxLight> 
   </Button>

   <Button variant="outline-primary"> 
   <DateforBoxLight> 20/12 - 12:30</DateforBoxLight> 
   <DayforBoxLight> qui </DayforBoxLight> 
   </Button>

   <Button variant="outline-primary"> 
   <DateforBoxLight> 20/12 - 12:30</DateforBoxLight> 
   <DayforBoxLight> qui </DayforBoxLight> 
   </Button>

   </Box> 
  </Carousel.Item>
  <Carousel.Item>
    <Box> 
   <Button variant="outline-primary"> 
   <DateforBoxLight> 20/12 - 12:30</DateforBoxLight> 
   <DayforBoxLight> qui </DayforBoxLight> 
   </Button>

   <Button variant="outline-primary"> 
   <DateforBoxLight> 20/12 - 12:30</DateforBoxLight> 
   <DayforBoxLight> qui </DayforBoxLight> 
   </Button>

   <Button variant="outline-primary"> 
   <DateforBoxLight> 20/12 - 12:30</DateforBoxLight> 
   <DayforBoxLight> qui </DayforBoxLight> 
   </Button>

   </Box> 
  </Carousel.Item>

</Carousel>
</CarouselCss> </> )
}

export default CarouselDate;