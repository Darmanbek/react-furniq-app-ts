import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./headerTop.scss";

const HeaderTop: React.FC = () => {
    return (
        <div className="header__top">
            <div className="header__top-location">
                <IoLocationOutline />
                <a
                    href="https://maps.app.goo.gl/aBxevJbN8FiEhxmr9"
                    target="_blank"
                    rel="noreferrer"
                >
                    Nukus - Punkt vidachi
                </a>
            </div>
            <nav className="header__top-nav">
                <ul>
                    <li>
                        <a
                            target="_blank"
                            href="https://furniq-seller.vercel.app/"
                            rel="noreferrer"
                        >
                            Sell on FurniQ
                        </a>
                    </li>
                    <li>
                        <Link to="/faq">Vopros-otvet</Link>
                    </li>
                    <li>
                        <Link to="/">Moy zakazi</Link>
                    </li>
                    <li>
                        <button>O’zbekcha</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HeaderTop;
