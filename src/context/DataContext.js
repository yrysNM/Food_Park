import { createContext, useState } from "react";
import data from "../components/app-foods/data/data";
import { termData } from "../components/app-terms/lib/data/term-data";

export const DataContext = createContext(null);

const DataContextProvider = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [toggleStylePositionFixed, setToggleStylePosition] = useState(false);
    const [isMainPage, setIsMainPage] = useState(false);
    const [show, setShow] = useState(false);
    const [term, setTerm] = useState(termData);


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

    function handleOpen(id) {
        setTerm((prevTerm) => 
        prevTerm.map(item => item.id === id ? setShow(!show) : setShow(show))
        );
    }

    return (
        <DataContext.Provider value={{
            toggleStylePositionFixed,
            isMainPage,
            data,
            changeStylePosition,
            isMainPageCheckFunc,
            setModalOpen,
            modalOpen,
            show,
            handleOpen,
            term
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider