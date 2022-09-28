import AppHeader from "../app-header/AppHeader";
import AppFoods from "../app-foods/AppFoods";
import AppContact from "../app-contact/AppContact";
import data from "../app-foods/data/data";

const App = () => {
    return (
        <div className="app">
            <AppHeader />
            <AppFoods foodsData={data} titleHeadText={"ХОЛОДНЫЕ ЗАКУСКИ"} />
            <AppFoods foodsData={data} titleHeadText={"ГОРЯЧИЕ ЗАКУСКИ"} />
            <AppFoods foodsData={data} titleHeadText={"Мясные блюда"} />
            <AppContact />
        </div>
    );
}

export default App;