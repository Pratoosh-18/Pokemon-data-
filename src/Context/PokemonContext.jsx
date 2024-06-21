import { createContext, useState } from "react";

export const PokemonContext = createContext()

const PokemonContextProvider = (props)=>{

    const [all_poke, setAll_poke] = useState([])

    const setPokeUsingApi = (val) => {
        setAll_poke(val)
    }

    const ContextVal = {
        all_poke,setPokeUsingApi
    }

return (
    <PokemonContext.Provider value={ContextVal}>
        {props.children}
    </PokemonContext.Provider>
)
}

export default PokemonContextProvider