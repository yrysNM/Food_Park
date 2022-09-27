import AppHeader from "../app-header/AppHeader";
import AppFoods from "../app-foods/AppFoods";
import data from "../app-foods/data/data";
const App = () => {
    return (
        <div className="app">
            <AppHeader />
            <div className="container">
                <AppFoods foodsData={data} />
            </div>
        </div>
    );
}

export default App;