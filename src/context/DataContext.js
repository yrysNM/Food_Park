import { createContext, useState } from "react";
import data from "../components/app-foods/data/data";

export const DataContext = createContext(null);

const DataContextProvider = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [toggleStylePositionFixed, setToggleStylePosition] = useState(false);
    const [isMainPage, setIsMainPage] = useState(false);

    const isMainPageCheckFunc = () => {
        const PATH = window.location.pathname;

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
            changeStylePosition,
            isMainPageCheckFunc,
            setModalOpen,
            modalOpen
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider