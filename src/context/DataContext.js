import { createContext, useState } from "react";
import data from "../components/app-foods/data/data";

export const DataContext = createContext(null);

const DataContextProvider = ({ children }) => {
    const [toggleStylePositionFixed, setToggleStylePosition] = useState(false);
    const [isMainPage, setIsMainPage] = useState(false);
    const [foodPageId, setFoodPageId] = useState("");

    const isMainPageCheckFunc = () => {
        const PATH = window.location.pathname;
        const lastIndexPathId = PATH.lastIndexOf("/");
        setFoodPageId(PATH.substring(lastIndexPathId + 1, PATH.length));

        if (PATH !== "/") {
            setIsMainPage(false);
        } else {
            setIsMainPage(true);
        }
    }

    function changeStylePosition() {
        if (window.pageYOffset > 405) {
            setToggleStylePosition(true);
        } else {
            setToggleStylePosition(false);
        }
    }


    return (
        <DataContext.Provider value={{
            toggleStylePositionFixed,
            isMainPage,
            data,
            foodPageId,
            changeStylePosition,
            isMainPageCheckFunc,
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider