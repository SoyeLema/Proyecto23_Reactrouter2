import { NavLink } from "react-router-dom"
import "../assets/css/navbar.css"

export default function Navbar() {

    const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive")

    return (
        <div className="navbar">
            <div className="logo"><img className="icono" src="../src/assets/img/poke_stop.png" alt="" /></div>
            <div className="links">
                <NavLink className={setActiveClass} to="/">
                    Home
                </NavLink>

                <NavLink className={setActiveClass} to="/pokemones">
                    Pokemones
                </NavLink>
            </div>
        </div>
    )
}