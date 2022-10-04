import AppHeader from "../app-header/AppHeader";
import AppFooter from "../app-footer/App-Footer";
import { AppBasketPage, Home, AppTermsPage } from "../pages";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<AppBasketPage />} />
          <Route path="/terms" element={<AppTermsPage />}/>
        </Routes>
        <AppFooter />
      </Router>
    </div>
  );
};

export default App;
