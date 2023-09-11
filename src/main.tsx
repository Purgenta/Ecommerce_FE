import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  Checkbox,
  Button,
  ChakraBaseProvider,
  extendBaseTheme,
} from "@chakra-ui/react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
const theme = extendBaseTheme({
  components: {
    Checkbox,
    Button,
  },
  styles: {
    global: () => ({
      body: {
        bg: "",
      },
    }),
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ChakraBaseProvider theme={theme}>
      <App />
    </ChakraBaseProvider>
  </BrowserRouter>
);
