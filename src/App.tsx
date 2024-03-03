import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "@/components";
import { 
    HomePage, 
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
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
