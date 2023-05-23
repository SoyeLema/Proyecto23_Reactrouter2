import { useState, createContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const pokeContext = createContext();

export const Provider = ({ children }) => {
    const [pkmns, setPkmns] = useState([]);
    const [name, setName] = useState(0);
    const [pkmn, setPkmn] = useState([]);
    const [pkmnIMG, setPkmnIMG] = useState([]);

    const url = "https://pokeapi.co/api/v2/pokemon/"
    const getPokemones = async () => {
        const res = await fetch(url);
        const { results } = await res.json();

        setPkmns(results);
        /* console.log(data.results); */
        console.log(results);
    }

    const newURL = "https://pokeapi.co/api/v2/pokemon/";
    const getPokemon = async () => {
        const res = await fetch(newURL + name);
        const data = await res.json();

        setPkmn(data)
        setPkmnIMG(data.sprites.other.dream_world);
    }


    const navigate = useNavigate();
    const irAPokemon = () => {
        navigate(`/pokemones/${name}`)
    }


    useEffect(() => {
        getPokemones();

    }, []);

    const globalState = { pkmns, setPkmns, name, setName, pkmn, setPkmn, pkmnIMG, setPkmnIMG, irAPokemon }

    return <pokeContext.Provider value={globalState}>
        {children}
    </pokeContext.Provider>
}