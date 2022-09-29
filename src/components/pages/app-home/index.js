import AppFoods from "../../app-foods/AppFoods";
import AppContact from "../../app-contact/AppContact";
import AppAbout from '../../app-about/App-About';
import AppFooter from '../../app-footer/App-Footer';
import data from "../../app-foods/data/data";

const AppHome = () => {
    return (
        <>
            <AppFoods foodsData={data} titleHeadText={"ХОЛОДНЫЕ ЗАКУСКИ"} />
            <AppFoods foodsData={data} titleHeadText={"ГОРЯЧИЕ ЗАКУСКИ"} />
            <AppFoods foodsData={data} titleHeadText={"Мясные блюда"} />
            <AppAbout />
            <AppContact />
            <AppFooter />
        </>
    );
}

export default AppHome;