import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "../app-header/AppHeader";
import AppSubMenu from "../app-submenu/App-Submenu";
import { AppHome, FoodCards, FoodStock } from "../pages";

const App = () => {

  return (
    <Router>
      <div className="app">
        <AppHeader />
        <AppSubMenu />
        <Routes>
          <Route path="/" element={<AppHome />} />
          <Route path="/food/:id" elements={<FoodCards />} />
          <Route path="/stock" element={<FoodStock />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
