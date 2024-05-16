import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import NavComponent from "./Nav/Nav";
import MainComponent from "./Main/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavComponent></NavComponent>
        <MainComponent></MainComponent>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
