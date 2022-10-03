import {useState, createContext} from 'react';

export const DataContext = createContext(null);

const Context = ({children}) => {
    const [baksetCount, setBasketCount] = useState(0);

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
            basketDicrementAndIncrement
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default Context;
