// React icons
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
// Video
import video from "../assets/beach.mp4";

const Home = () => {
    return (
        <section className="container-home">
            <div className="container-home--overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>
            <div className="container-home--content">
                <div className="container-home--content-text">
                    <p>Nos tarifs</p>
                    <h2>Trouvez vos vacances de rêve</h2>
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
                            <h3>2000 €</h3>
                        </div>
                        <div className="input">
                            <input type="range" min="2000" max="5000" />
                        </div>
                    </div>
                    <div className="container-home--content-card-filter">
                        <HiFilter className="icon" />
                        <span>Filtre avancé</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;