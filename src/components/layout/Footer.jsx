import { MdOutlineTravelExplore } from "react-icons/md";

const Footer = () => {
    return (
        <div className="container-footer">
        <hr />
        <div className="container-footer--box">
            <div className="container-footer--box-logo">
                <div className="container-footer--box-logo-title">
                    <h1><MdOutlineTravelExplore className="icon" /> Voyage</h1>
                </div>
                <div>
                    <p>© 2023, Voyage</p>
                </div>
            </div>
            <div className="container-footer--box-office">
                <h3>Nos locaux</h3>
                <p>Paris, 75000</p>
                <p>rue du Voyage n°1</p>
                <p>Téléphone: 05.00.00.00.04</p>
                <p>E-mail: voyage-voyage75@gmail.com</p>
            </div>
            <div className="container-footer--box-partner">
                <h3>Nos partenaires</h3>
                <p>Voyage</p>
                <p>En Terre Inconnu</p>
                <p>Tour du Monde</p>
            </div>
        </div>
    </div>
    );
};

export default Footer;