import AppHeader from "../app-header/AppHeader";
import AppFoods from "../app-foods/AppFoods";
import AppContact from "../app-contact/AppContact";
import AppSubmenu from '../app-submenu/App-Submenu';
import AppAbout from '../app-about/App-About';
import AppFooter from '../app-footer/App-Footer';
import data from "../app-foods/data/data";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <AppSubmenu />
      <AppFoods foodsData={data} titleHeadText={"ХОЛОДНЫЕ ЗАКУСКИ"} />
      <AppFoods foodsData={data} titleHeadText={"ГОРЯЧИЕ ЗАКУСКИ"} />
      <AppFoods foodsData={data} titleHeadText={"Мясные блюда"} />
      <AppAbout />
      <AppContact />
      <AppFooter />
    </div>
  );
}

export default App;
