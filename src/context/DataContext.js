import { createContext, useState, useEffect } from "react";
export const DataContext = createContext(null);

const DataContextProvider = ({ children }) => {
    const [toggleStylePositionFixed, setToggleStylePosition] = useState(false);
    const [isMainPage, setIsMainPage] = useState(false);

    const isMainPageCheckFunc = () => {
        console.log(window.location.pathname);
        if (window.location.pathname !== "/") {

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
            changeStylePosition,
            isMainPageCheckFunc
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider