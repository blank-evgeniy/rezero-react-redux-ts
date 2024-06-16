import "./Characters.scss";
import Search from "../../components/Search/Search";
import FilterMenu from "../../components/FilterMenu/FilterMenu";
import CharactersList from "../../components/CharactersList/CharactersList";
import React from "react";
import Header from "../../components/Header/Header";


const Characters:React.FC = () => {
    const itemsOnPageCount = 6;

    return (
        <div className="characters">
            <Header title="Characters"/>

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