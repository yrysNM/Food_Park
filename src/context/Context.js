import {useState, createContext} from 'react';

export const DataContext = createContext(null);

const Context = ({children}) => {
    const [baksetCount, setBasketCount] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    function basketDicrementAndIncrement() {
        if (baksetCount > -1) {
            setBasketCount(0);
        } else {
            setBasketCount(baksetCount + 1);
        }
    }

    return (
        <DataContext.Provider
        value={{
            baksetCount,
            setBasketCount,
            basketDicrementAndIncrement,
            setModalOpen,
            modalOpen
        }}>
            {children}
        </DataContext.Provider>
    )
}


export function basketIncrement (basketCount, setBasketCount) {
    if (basketCount > 0) {
        setBasketCount(basketCount + 1);
    } 

    return basketCount
}


export function basketDecrement (basketCount, setBasketCount) {
    if (basketCount > 0) {
        setBasketCount(basketCount - 1);
    } 

    if (basketCount < 0 || basketCount === 0) {
        setBasketCount(0);
    } 

    return basketCount
}

export default Context;
