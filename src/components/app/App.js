import AppHeader from "../app-header/AppHeader";
import AppFoods from "../app-foods/AppFoods";
import data from "../app-foods/data/data";
const App = () => {
    return (
        <div className="app">
            <AppHeader />
            <AppFoods foodsData={data} titleHeadText={"ХОЛОДНЫЕ ЗАКУСКИ"} />
            <AppFoods foodsData={data} titleHeadText={"ГОРЯЧИЕ ЗАКУСКИ"} />
            <AppFoods foodsData={data} titleHeadText={"Мясные блюда"} />
        </div>
    );
}

export default App;