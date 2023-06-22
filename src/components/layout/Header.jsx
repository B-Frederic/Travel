// React
import { useState } from "react";
// React icons
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Header = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const handleClose = () => {
        setToggle(false);
    }

    return (
        <section className="container">
            <header className="container-header">
                <div className="container-header--title">
                    <h1><MdOutlineTravelExplore className="icon" /> Voyage</h1>
                </div>
                <div className={ toggle ? "container-header--navbar active" : "container-header--navbar" }>
                    <ul>
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">Pack-Voyage</a></li>
                        <li><a href="#">Populaires</a></li>
                        <li><a href="#">A propos</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div className="container-header--navbar-close">
                        <AiFillCloseCircle className="icon" onClick={handleClose}/>
                    </div>
                </div>
                <div className="container-header--navbar-responsive" onClick={handleToggle}>
                    <TbGridDots className="icon" />
                </div>
            </header>
        </section>
    );
};

export default Header;