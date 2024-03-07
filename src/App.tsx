import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "@/components";
import { 
    CartPage,
    DetailsPage,
    FavoritePage,
    HomePage, 
    NotFoundPage, 
    SignInPage, 
    SignOnPage 
} from "@/pages";
import "@/styles/app.css";

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<SignInPage />} />
                    <Route path="/register" element={<SignOnPage />} />
                    <Route path="/wishes" element={<FavoritePage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/details" element={<DetailsPage />} />

                    <Route path="/*" element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
