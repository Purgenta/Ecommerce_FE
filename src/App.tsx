import { useLocation } from "react-router-dom";
import Router from "./router/Router";
import { Box } from "@chakra-ui/react";
function App() {
  const { pathname } = useLocation();
  return (
    <Box backgroundColor={"gray.300"}>
      <Router key={pathname}></Router>
    </Box>
  );
}

export default App;
