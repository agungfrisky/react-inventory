import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InventoryPage from "./pages/InventoryPage";
import MaintenancePage from "./pages/MaintenancePage";
import './style.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/InventoryPage" element={<InventoryPage />} />
        <Route path="/MaintenancePage/:id" element={<MaintenancePage />} />
      </Routes>
    </Router>
  )
}

export default App
