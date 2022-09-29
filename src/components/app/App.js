import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "../app-header/AppHeader";
import AppSubmenu from '../app-submenu/App-Submenu';
import { AppHome, AppFoodCards } from "../pages";
const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <AppSubmenu />
        <Routes>
          <Route path="/" element={<AppHome />} />
          <Route path="/food/:id" elements={<AppFoodCards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
