import CardCover from "./components/cardcover";
import CardInformation from "./components/cardinformation";
import CarouselDate from "./components/carouseldate";
import GlobalStyle from "./theme/globalStyle";
import GlobalFonts from './assets/font/fonts'

function App() {
  return (
    <>
 <GlobalStyle />
 <GlobalFonts />
 <CardCover /> 
 <CardInformation />
 <CarouselDate /> 
 </>
  );
}

export default App;
