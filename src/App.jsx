import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.main`
  /* background-color: orangered; */
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis </Heading>
            <div>
              <Heading as="h2">Check in and out </Heading>
              <Button onClick={() => alert("Check in")}>Check in</Button>
              <Button
                variation="danger"
                size="small"
                onClick={() => alert("Check Out")}
              >
                Check out
              </Button>
            </div>
          </Row>

          <Heading as="h3">Form</Heading>

          <Row>
            <form>
              <Input type="number" placeholder="Number of Guests" />
              <Input type="number" placeholder="Number of Guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
