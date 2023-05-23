import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/home.css";

import Form from 'react-bootstrap/Form';

export default function Home() {

    const url = "https://pokeapi.co/api/v2/pokemon/"

    const [pkmns, setPkmns] = useState([]);
    const [name, setName] = useState(0);


    const navigate = useNavigate();

    const irAPokemon = () => {
        navigate(`/pokemones/${name}`)
    }


    const getPokemones = async () => {
        const res = await fetch(url);
        const { results } = await res.json();

        setPkmns(results);
    }



    useEffect(() => {
        getPokemones();
    }, []);

    return (
        <div className="pokeContainer">
            <h2>¡Hola Entrenador!</h2>
            <h1>¡Bienvenido/a al mundo Pokemon!</h1>

            <img className="pokeIMG" src="../src/assets/img/Profesor_Oak.png" alt="" />

            <h3>Selecciona tu pokemon favorito aquí abajo para conocer más de sus estadísticas.</h3>

            <div className="pokeContainer">
                <Form.Select aria-label="Default select example" onChange={({ target }) => { setName(target.value) }} className="form">
                    <option value="" >Elige a tu Pokemon!</option>
                    {pkmns.map((pokemon, i) => {
                        return <option key={i} value={pokemon.name}>{pokemon.name}</option>
                    })}
                </Form.Select>

                <button onClick={irAPokemon}>Buscar</button>
            </div >
        </div >
    )
}