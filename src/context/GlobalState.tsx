import  {createContext, useReducer} from "react";
import AppReducer from "./AddReducer";

// intial State
const intialState = {
    transcations: [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
    ]
};

// create context 

export const GlobalContext = createContext(intialState);

// Provider context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, intialState);

    return(
        <GlobalContext.Provider value={{
            transcations: state.transcations
        }}>
            {children}
        </GlobalContext.Provider>
    )
}