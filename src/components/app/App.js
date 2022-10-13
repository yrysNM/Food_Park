import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "../app-header/AppHeader";
import AppSubmenu from "../app-submenu/App-Submenu";
import AppFooter from "../app-footer/App-Footer";
import { AppBasketPage, Home, AppTermsPage, FoodCard, FoodPromotion, OrderProcessing } from "../pages";

const App = () => {

  return (
    <Router>
      <div className="app">
        <AppHeader />
        <AppSubmenu />
        <Routes>
          <Route path="/food/:id" element={<FoodCard />} />
          <Route path="/promotion" element={<FoodPromotion />} />
          <Route path="/orderProcessing" element={<OrderProcessing />} />
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<AppBasketPage />} />
          <Route path="/terms" element={<AppTermsPage />} />
        </Routes>

        <AppFooter />
      </div>
    </Router>
  );
};

export default App;
