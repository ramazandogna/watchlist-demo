import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { Header } from "./Components/Header";
import { Add } from "./Components/Add";
import { Watched } from "./Components/Watched";
import { Watchlist } from "./Components/Watchlist";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        {" "}
        <Header />
        <Routes>
          <Route path="/" element={<Watchlist />}></Route>
          <Route path="/watched" element={<Watched />}></Route>
          <Route path="/add" element={<Add />}></Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
