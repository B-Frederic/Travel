// Data
import travelCards from "../data/data_cards";
// React icons
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from "react-icons/hi";
import { RiStarSFill } from "react-icons/ri";


const Cards = () => {
    return (
        <div className="container-cards">
            <div className="container-cards--title">
                <h3>Les destinations les plus visitée</h3>
            </div>
            <div className="container-cards--grid">
                {
                    travelCards.map((element, index) => (
                        <div className="container-cards--card" key={index}>
                            <div className="container-cards--card-img">
                                <img src={element.imgSrc} alt={`photo de voyage ${element.destination}`} />
                            </div>
                            <div className="container-cards--card-info">
                                <h4>{element.destination}</h4>
                                <div><HiOutlineLocationMarker className="icon"/><span>{element.location}</span></div>
                            </div>
                            <div className="container-cards--card-details">
                                <span className="container-cards--card-details-rating">{element.rating} <RiStarSFill className="icon-rating" /></span>
                                <span className="container-cards--card-details-price">{element.price}</span>
                            </div>
                            <div className="container-cards--card-description">
                                <p>{element.description}</p>
                            </div>
                            <button>Détails <HiOutlineClipboardCheck className="icon" /></button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Cards;