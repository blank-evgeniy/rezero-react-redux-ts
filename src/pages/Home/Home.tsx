import React from "react";
import { useNavigate } from "react-router-dom";

import "./Home.scss"

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <main className="home">
            <section className="home__logo-section">
                <img
                    className="home__logo" 
                    src="/images/home/home_logo.png"
                    alt="re: zero"
                />
                <h1 className="home__title">characters_database</h1>
            </section>

            <section 
                className="home__nav-section" 
                style={{backgroundImage: "url(/images/home/home_back.jpg)"}}
            >
                <button 
                    className="home__button" 
                    onClick={ () => navigate("/characters")}
                >
                    TO THE <br/> WEBSITE
                </button>
            </section>
        </main>
    );
};

export default Home;