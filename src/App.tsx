import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InventoryPage from "./pages/InventoryPage";
import './style.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/InventoryPage" element={<InventoryPage />} />
      </Routes>
    </Router>
  )
}

export default App
