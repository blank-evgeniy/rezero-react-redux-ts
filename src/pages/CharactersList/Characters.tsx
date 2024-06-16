import "./Characters.scss";
import { PiArrowUUpLeft } from "react-icons/pi";
import Search from "../../components/Search/Search";
import FilterMenu from "../../components/FilterMenu/FilterMenu";
import { useNavigate } from "react-router-dom";
import CharactersList from "../../components/CharactersList/CharactersList";
import React from "react";


const Characters:React.FC = () => {
    const itemsOnPageCount = 6;

    const navigate = useNavigate();

    return (
        <div className="characters">
            <header className="characters__header">
                <button className="characters__back-btn" 
                onClick={() => {navigate(-1)}}><PiArrowUUpLeft className="character-list__back-btn-img" size={"30px"}/></button>
                <h1 className="characters__title">Characters</h1>
            </header>

            <main className="characters__main">
                <div className="characters__filter">
                    <FilterMenu/>
                    <Search/>
                </div>
                
                <CharactersList itemsOnPageCount={itemsOnPageCount}/>
            </main>
        </div>
    );
};

export default Characters;