import { ThemeProvider } from "styled-components";
import { StyledContent, StyledHowItWork } from "./components/styled/Content.styled";

import { Header } from "./components/Header";
import { StyledContainer } from "./components/styled/Container.styled";
import { StyledFlex } from "./components/styled/Flex.styled";
import GlobalStyle from "./components/styled/Global.styled";
import { Image } from "./components/styled/Header.styled";
import { StyledHeading } from "./components/styled/Heading.styled";
import Card from "./components/Card";
import { Access, Action, StyledContentNoImage } from "./components/styled/ContentNoImage.styles";
import { Input } from "./components/styled/Input.styled";
import { Button } from "./components/styled/Button.styled";
import { Footer } from "./components/Footer";

function App() {
  const theme = {
    colors: {
      header: "hsl(0, 0%, 75%)",
      body: "#fff",
      footer: "hsl(243, 87%, 12%)",
    },
    mobile: "768px",
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledContainer>
        <Header />
      </StyledContainer>
      <StyledContent>
        <StyledContainer>
          <StyledFlex direction="column-reverse">
            <div>
              <StyledHeading> Stay productive, wherever you are</StyledHeading>
              <p> Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
              <p> Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>
              <StyledHowItWork>
                <a href="https://google.com">
                  See how Fylo works
                  <img src="./images/icon-arrow.svg" alt="" />
                </a>
              </StyledHowItWork>

              <Card />
            </div>
            <Image src="./images/illustration-2.svg" alt="" />
          </StyledFlex>
        </StyledContainer>
      </StyledContent>
      <StyledContentNoImage bg="hsl(238, 22%, 44%)">
        <StyledContainer>
          <Access>
            <div>
              <h4>Get early access today</h4>
              <p>
                It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to
                help you.
              </p>
            </div>
            <Action>
              <Input placeholder="email@example.com" />
              <Button bg="hsl(224, 93%, 58%)" color="#fff">
                Get Started For Free
              </Button>
            </Action>
          </Access>
        </StyledContainer>
      </StyledContentNoImage>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
