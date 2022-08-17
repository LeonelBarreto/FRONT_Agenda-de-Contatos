import GlobalContext from "./GlobalContext";
import useGlobalContext from "../Hooks/useGlobalContext";

function GlobalContextProvider(props) {
    const valuesProvider = useGlobalContext();

    return (
        <GlobalContext.Provider value={valuesProvider>
            {props.children}
        </GlobalContext.Provider>
    )
};

export default GlobalContextProvider;