import { useNavigate } from "react-router-dom";
import "./Home.scss"

const Home = () => {
    const navigate = useNavigate();

    return (
        <main className="home">
            <h1 className="home__title">
                Re zero
            </h1>
            <p className="home__info">
                charecters_database
            </p>
            <button onClick={ () => navigate("/characters")}>TO THE WEBSITE</button>
        </main>
    );
};

export default Home;