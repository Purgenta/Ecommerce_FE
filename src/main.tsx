import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  ChakraProvider,
  Box,
  Flex,
  extendBaseTheme,
  Button,
} from "@chakra-ui/react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
const theme = extendBaseTheme({
  components: {
    Button,
    Box,
    Flex,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
