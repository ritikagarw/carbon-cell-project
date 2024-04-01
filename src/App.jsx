import "./App.css";
import SideBar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Organisation from "./pages/Organisation";
import Assets from "./pages/Assets";
import Trade from "./pages/Trade";
import History from "./pages/History";
import Wallet from "./pages/Wallet";

function App() {
  return (
      <Router >
        <SideBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/organisation" element={<Organisation />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/trade" element={<Trade />} />
            <Route path="/history" element={<History />} />
            <Route path="/wallet" element={<Wallet />} />

            <Route path="*" element={<> not found</>} />
          </Routes>
        </SideBar>
      </Router>
  );
}

export default App;
