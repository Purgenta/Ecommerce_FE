import { useLocation } from "react-router-dom";
import Router from "./router/Router";
import { Box } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {
  const { pathname } = useLocation();
  return (
    <Box backgroundColor={"gray.300"}>
      <Provider store={store}>
        <Router key={pathname}></Router>
      </Provider>
    </Box>
  );
}

export default App;
