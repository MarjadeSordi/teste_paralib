import styled from "styled-components";

export const CarouselCss= styled.div`
width: 360px;
.carousel-indicators {
  display: none; 
}
.carousel-control-next-icon {
  display: none; 
}
.carousel-control-prev-icon {
  display: none; 
}
`

export const Box = styled.div`
display: flex; 
padding: 2%; 
.btn-outline-primary {
  width: 150px;
  height: 64px;
  border: 2px solid #00A29C;
  margin: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
}
`

export const BoxTextPrincipal =styled.div`
margin-top: 2%;
display: flex; 
justify-content: space-between;`

export const TextSelect = styled.span`
font-family: 'ItauDisplay';
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 26px;
color: #020203;
margin-left: 5%;`

export const LinkSeeAll = styled.a`
font-family: 'ItauDisplay';
text-decoration: none; 
color: #4939FC;
font-weight: bold;
font-size: 14px;
line-height: 18px;
margin-right: 5%;
margin-top: 2%;
`

export const DateforBoxLight = styled.span`
font-weight: bold;
font-size: 14px;
`

export const DayforBoxLight = styled.span`
font-size: 16px;
`

