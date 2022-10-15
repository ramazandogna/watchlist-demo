import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { Header } from "./Components/Header";
import { Add } from "./Components/Add";
import { Watched } from "./Components/Watched";
import { Watchlist } from "./Components/Watchlist";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Watchlist />}></Route>
        <Route path="/watched" element={<Watched />}></Route>
        <Route path="/add" element={<Add />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
