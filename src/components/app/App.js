import { useLayoutEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import AppHeader from "../app-header/AppHeader";
import AppSubmenu from "../app-submenu/App-Submenu";
import AppFooter from "../app-footer/App-Footer";
import { AppBasketPage, Home, AppTermsPage, FoodCard, FoodPromotion, OrderProcessing, About } from "../pages";

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}

const App = () => {

  return (
    <Router>
      <Wrapper>

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
            <Route path="/about" element={<About />} />
          </Routes>

          <AppFooter />
        </div>
      </Wrapper>
    </Router>
  );
};

export default App;
