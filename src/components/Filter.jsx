// React icons
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
// Video
import video from "../assets/beach.mp4";
import { useState } from "react";

const Filter = () => {

    const [rangeValue, setRangeValue]= useState(500);

    

    return (
        <section className="container-home">
            <div className="container-home--overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>
            <div className="container-home--content">
                <div className="container-home--content-text">
                    <h2>Trouvez vos<span> vacances de rêve</span></h2>
                </div>
                <div className="container-home--content-card">
                    <div className="container-home--content-card-destination">
                        <label htmlFor="city">Votre destination :</label>
                        <div className="input">
                            <input id="city" type="text" placeholder="Nom de la destination" />
                            <GrLocation className="icon" />
                        </div>
                    </div>
                    <div className="container-home--content-card-date">
                        <label htmlFor="date">Sélectionner une date :</label>
                        <div className="input">
                            <input id="date" type="date"/>
                        </div>
                    </div>
                    <div className="container-home--content-card-price">
                        <div className="price">
                            <label htmlFor="price">Prix max :</label>
                            <h3>{rangeValue} €</h3>
                        </div>
                        <div className="input">
                            <input type="range" min="500" max="4000" onChange={(event) => setRangeValue(event.target.value)}/>
                        </div>
                    </div>
                    <div className="container-home--content-card-filter">
                        <HiFilter className="icon" />
                        <span>Filtre</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Filter;