import react, {createContext, useState} from 'react';

export const DataContext = createContext()

const ContextProvider = props => {
    const [data, setData] = useState('test')

return (
    <DataContext.Provider value ={{data}}>
        {props.children}
    </DataContext.Provider>
)

}

export default ContextProvider