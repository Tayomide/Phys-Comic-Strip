import styled from "styled-components"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ComicStrip } from "./Pages/ComicStrip";

const App = () => {
  return (
    <Container>
      <Router>
        <Routes>
          <Route exact path="/" element={ <ComicStrip /> } />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div``