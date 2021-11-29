import styled from "styled-components";

export const CardImg = styled.div`
width: 360px;
height: 180px;
.card-img {
  width: 360px;
  height: 180px;
  object-fit: cover;
  overflow: hidden;
  object-position: 0px -20px; 

}
.card-img-overlay {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 57.81%); 
  width: 360px;
  height: 180px;
} 
.card-title {
  font-family: 'ItauDisplay';
  margin-top: 40%;
  font-size: 18px;
  font-weight: 700;
}`