import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { charactersSlice } from "../../store/reducers/charactersSlice";
import CharactersData from './../../data/character.json';
import CharacterItem from "../../components/CharacterItem";
import Search from "../../components/Search";
import FilterMenu from "../../components/FilterMenu";
import { useNavigate } from "react-router-dom";


const CharacterList = () => {
    const itemsOnPageCount = 6;

    const {characters, page, pagesCount} = useAppSelector(state => state.characters);
    const {search, sex, races} = useAppSelector(state => state.filter);
    const {charactersAdded, pagesCountUpdated, nextPage, prevPage} = charactersSlice.actions;
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    useEffect( ()=> {
        dispatch(charactersAdded(getCharacters()));
    },[page, search, sex, races])

    const getCharacters = () => {
        const charactersList = CharactersData.filter( character => {
            if (!search) return true
            return character.name.toUpperCase().startsWith(search.toUpperCase());
        }).filter ( character => {
            if (sex === "any") return true;
            return character.sex === sex;
        }).filter ( character => {
            if (races.length === 0) return true;
            else return races.includes(character.race);
        })

        dispatch(pagesCountUpdated(Math.ceil(charactersList.length/itemsOnPageCount)));

        return charactersList.filter( (_character, index) => {
            return index < itemsOnPageCount*page &&  index + 1 > itemsOnPageCount*(page-1)
        });
    }

    return (
        <div className="character-list">
            <button onClick={() => {navigate(-1)}}>back</button>
            <h1 className="character-list__title">Characters</h1>

            <FilterMenu/>
            <Search/>
            
            {characters.map( (character) => 
                <CharacterItem key={character.id}
                    name={character.name}
                    img={character.img}
                />
            )}

            <button className="character-list__nav-button" 
                disabled={pagesCount == 1 || page < pagesCount} 
                onClick={ () => {dispatch(prevPage())}}
            >
                {'<-'}
            </button>

            <div className="character-list__page-info">
                {`page ${page}/${pagesCount}`}
            </div>

            <button className="character-list__nav-button"
                disabled={pagesCount == 1 || page > 1} 
                onClick={ () => {dispatch(nextPage())}}
            >
                {'->'}
            </button>
        </div>
    );
};

export default CharacterList;