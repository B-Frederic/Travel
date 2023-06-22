// React
import { useEffect, useState } from "react";
// Data
import travelCards from "../data/data_cards";
// React icons
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from "react-icons/hi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { RiStarSFill } from "react-icons/ri";


const Cards = () => {

    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {

        const onScroll = (event) => {
          setScrollTop(event.target.documentElement.scrollTop);
          setScrolling(event.target.documentElement.scrollTop > 1400);
        };
    
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
    
      }, [scrollTop]);

    return (
        <div className="container-cards">
            <div className="container-cards--title">
                <h3>Les destinations <span>les plus visitée</span></h3>
            </div>
            <div className="container-cards--box">
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
            {
                scrolling && (
                    <div className="container-cards--top">
                        < AiOutlineArrowUp onClick={() => window.scrollTo(0, 0)} />
                    </div>
                )
            }
        </div>
    );
};

export default Cards;