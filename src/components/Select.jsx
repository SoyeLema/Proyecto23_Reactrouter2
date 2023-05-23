import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import "../assets/css/pokemones.css"

export default function Select() {

    const url = "https://pokeapi.co/api/v2/pokemon/"

    const [pkmns, setPkmns] = useState([]);
    const [name, setName] = useState(0);


    const navigate = useNavigate();
    const reload = () => { window.location.reload(true) };

    const irAPokemon = () => {
        navigate(`/pokemones/${name}`)
        reload();
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

            <Form.Select aria-label="Default select example" onChange={({ target }) => { setName(target.value) }} className="form">
                <option >Elige a tu Pokemon!</option>
                {pkmns.map((pokemon, i) => {
                    return <option key={i} value={pokemon.name}>{pokemon.name}</option>
                })}
            </Form.Select>

            <button onClick={irAPokemon}>Buscar</button>

        </div>
    )
}