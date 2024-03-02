import React from "react";
import { 
    Header,
    SectionBanner,
    Footer,
} from "@/components";
import "@/styles/app.css";

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <main>
                <SectionBanner />
            </main>
            <Footer />
        </div>
    );
};

export default App;
