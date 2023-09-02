import { useLocation } from "react-router-dom";
import Router from "./router/Router";
function App() {
  const { pathname } = useLocation();
  return <Router key={pathname}></Router>;
}

export default App;
