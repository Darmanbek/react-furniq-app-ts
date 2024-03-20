import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Footer, Aside } from "@/components";
import {
    CartPage,
    CategoryPage,
    DetailsPage,
    FavoritePage,
    HomePage,
    NotFoundPage,
    ProfilePage,
    SignInPage,
    SignOnPage,
} from "@/pages";
import "@/styles/app.css";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/*" element={<NotFoundPage />} />
                    <Route path="/login" element={<SignInPage />} />
                    <Route path="/register" element={<SignOnPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route
                        path="/profile/:profileId"
                        element={<ProfilePage />}
                    />
                    <Route path="/wishes" element={<FavoritePage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route
                        path="/details/:productId"
                        element={<DetailsPage />}
                    />
                    =
                    <Route
                        path="/category/:categoryId"
                        element={<CategoryPage />}
                    />
                </Routes>
            </main>
            <Footer />
            <Aside />
        </>
    );
};

export default App;
