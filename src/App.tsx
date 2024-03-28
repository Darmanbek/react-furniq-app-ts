import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header, Footer, Aside } from "@/components";
import {
    CartPage,
    CategoryPage,
    DetailsPage,
    FavoritePage,
    HomePage,
    NotFoundPage,
    SearchPage,
    ProductsPage,
    ProfilePage,
    SignInPage,
    SignOnPage,
} from "@/pages";
import "@/styles/app.css";
import RequireAuth from "./hoc/RequireAuth";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<SignInPage />} />
                    <Route path="/register" element={<SignOnPage />} />
                    <Route
                        path="/profile"
                        element={<Navigate to="/profile/orders" replace />}
                    />
                    <Route
                        path="/profile/:profileId"
                        element={
                            <RequireAuth>
                                <ProfilePage />
                            </RequireAuth>
                        }
                    />
                    <Route path="/wishes" element={<FavoritePage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route
                        path="/details/:productId"
                        element={<DetailsPage />}
                    />

                    <Route
                        path="/category/:categoryId"
                        element={<CategoryPage />}
                    />

                    <Route path="/search" element={<SearchPage />} />

                    <Route path="/products/*" element={<ProductsPage />} />

                    <Route path="/*" element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer />
            <Aside />
        </>
    );
};

export default App;
