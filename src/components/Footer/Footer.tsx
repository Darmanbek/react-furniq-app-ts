import React from "react";
import { Link } from "react-router-dom";
import {
    FaFacebookSquare,
    FaInstagram,
    FaTelegram,
    FaYoutube,
} from "react-icons/fa";
import { GooglePlay } from "@/assets";
import "./footer.scss";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer__item">
                        <h2>O nas</h2>
                        <a
                            href="https://maps.app.goo.gl/aBxevJbN8FiEhxmr9"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Nukus - Punkt vidachi
                        </a>
                        <Link to="/jobs">Vakanciy</Link>
                    </div>
                    <div className="footer__item">
                        <h2>Polzovatelyam</h2>
                        <a href="tel:+998907042502">Svyazatcya s nami</a>
                        <Link to="/faq">Vopros - Otvet</Link>
                    </div>
                    <div className="footer__item">
                        <h2>Dlya Predprinimateley</h2>
                        <a
                            href="https://furniq-seller.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Prodavayte na Furniq
                        </a>
                        <a
                            href="https://furniq-seller.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Vhod dlya prodavcov
                        </a>
                    </div>
                    <div className="footer__item">
                        <h2>Skachat prilojenie</h2>
                        <a
                            target="_blank"
                            href="https://play.google.com/"
                            rel="noreferrer"
                        >
                            <img
                                src={GooglePlay}
                                alt="GooglePlayMarket"
                                className="max-w-36 w-full"
                            />
                        </a>
                        <div className="footer__item">
                            <h2>Furniq v socsetyah</h2>
                            <div className="footer-links">
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaInstagram className="footer-links__icon" />
                                </a>
                                <a
                                    href="https://www.telegram.org"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaTelegram className="footer-links__icon" />
                                </a>
                                <a
                                    href="https://www.youtube.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaYoutube className="footer-links__icon" />
                                </a>
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaFacebookSquare className="footer-links__icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
