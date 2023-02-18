import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Register } from "./Components/Register/Register";
import { Home } from "./Components/Home/Home";
import { GlobalProdiver } from "./context/GlobalState";
import { Profile } from "./Components/Profile/Profile";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <GlobalProdiver>
          <Header />
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </GlobalProdiver>
      </BrowserRouter>
    </div>
  );
}

export default App;
