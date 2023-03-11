import  {createContext, useReducer, useState} from "react";
import AppReducer from "./AddReducer";

// intial State
const intialState = {
    transactions: [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
    ]
};

// create context 

export const GlobalContext = createContext(intialState);

// Provider context
export const GlobalProvider = ({ children }: any) => {
    // const [state, dispatch] = useReducer(AppReducer, intialState);
    const [transactions, setTranscation] = useState([...intialState.transactions]);

    return(
        <GlobalContext.Provider value={{
            transactions,
            setTranscation
        }}>
            {children}
        </GlobalContext.Provider>
    )
}