import React from "react";
import InfoCard from "./components/Card";
import InfoForm from "./components/Form";
import { Container } from "./styles/CardStyles";
import GlobalStyle from './styles/GlobalStyles'; 


const App = () => {
  return (
    <Container>
      <GlobalStyle/>
      <InfoCard />
      <InfoForm />
    </Container>
  );
};

export default App;
