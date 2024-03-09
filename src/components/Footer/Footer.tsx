import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
    FaFacebookSquare,
    FaInstagram,
    FaTelegram,
    FaYoutube,
} from "react-icons/fa";
import { GooglePlay } from "@/assets";
import "./footer.scss";

const Footer: React.FC = () => {
    const { t } = useTranslation()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer__item">
                        <h2>{t('aboutOfUs')}</h2>
                        <a
                            href="https://maps.app.goo.gl/aBxevJbN8FiEhxmr9"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t('whichCity')} {t('city')} - Punkt vidachi
                        </a>
                        <Link to="/jobs">{t('carrers')}</Link>
                    </div>
                    <div className="footer__item">
                        <h2>{t('forUsers')}</h2>
                        <a href="tel:+998907042502">{t('connectWithUs')}</a>
                        <Link to="/faq">{t('questionAnswer')}</Link>
                    </div>
                    <div className="footer__item">
                        <h2>{t('forEntrepreneur')}</h2>
                        <a
                            href="https://furniq-seller.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t('sellOnFurniq')}
                        </a>
                        <a
                            href="https://furniq-seller.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t('SignInSellers')}
                        </a>
                    </div>
                    <div className="footer__item">
                        <h2>{t('downloadApp')}</h2>
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
                            <h2>{t('FurniqInSocialMedias')}</h2>
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
