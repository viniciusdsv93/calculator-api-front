import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./routes/routes";
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
