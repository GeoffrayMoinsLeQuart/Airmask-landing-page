import {useState} from "react";
import Header from './components/header';
import Footer from './components/footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './common/theme';
import StyledContainer from './common/container';
import HowItWorks from './components/how-it-works';
import Intro from './components/intro';
import AirmaskInNumber from "./components/airmask-in-number";
import Team from './components/team';
import HowToStart from './components/how-to-start';
import FAQ from './components/faq';

function App() {

const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Header value={value} setValue={setValue} />
      <StyledContainer value={value} setValue={setValue}>
        <Intro value={value} />
        <HowItWorks value={value} />
        <AirmaskInNumber value={value} />
        <Team value={value} />
        <br />
        <br />
        <br />
        <br />
        <HowToStart value={value} />
        <br />
        <br />
        <br />
        <br />
        <FAQ value={value} />
        <br />
        <br />
        <br />
        <br />
        {/* HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello Hello Hello */}
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        HelloHelloHello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        HelloHelloHello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        HelloHelloHello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        HelloHelloHello Hello Hello ollo Hello Hello Hello Hello Hello Hello
        Hello HelloHelloHello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello HelloHelloHello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello HelloHelloHello Hello llo Hello Hello Hello Hello Hello Hello
        Hello HelloHelloHello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello HelloHelloHello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello HelloHelloHello Hello llo Hello Hello Hello Hello Hello Hello
        Hello HelloHelloHello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello HelloHelloHelo Hello Hello Hello Hello HelloHelloHello Hello Hello
        ollo Hello Hello Hello Hello Hello Hello Hello HelloHelloHello Hello
        Hello Hello Hello Hello Hello Hello Hello
      </StyledContainer>
      <Footer value={value} setValue={setValue} />
    </ThemeProvider>
  );
}

export default App;
