import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { pageSlice } from "../../store/reducers/pageSlice";
import CharacterItem from "../../components/CharacterItem/CharacterItem";
import PagesNavigation from "../PagesNavigation/PagesNavigation";

import CharactersData from '../../data/character.json';
import "./CharactersList.scss";
import ICharacter from "../../types/ICharacter";

interface CharactersListProps{
    itemsOnPageCount: number;
}

const CharactersList:React.FC<CharactersListProps> = ({itemsOnPageCount}) => {
    const {page} = useAppSelector(state => state.page);
    const {search, gender, races} = useAppSelector(state => state.filter);
    const dispatch = useAppDispatch();
    const {pagesCountUpdated} = pageSlice.actions;

    const [characters, setCharacters] = useState<ICharacter[]>([]);

    useEffect( () => {
        setCharacters(CharactersData);
    }, [])

    const filteredCharacters = useMemo( () => 
        characters.filter( character => {
            if (!search) return true
            return character.name.toUpperCase().startsWith(search.toUpperCase());
        }).filter ( character => {
            if (gender === "any") return true;
            return character.gender === gender;
        }).filter ( character => {
            if (races.length === 0) return true;
            else return races.includes(character.race);
        }), [characters, search, gender, races]) 

    const currentPageCount = Math.ceil(filteredCharacters.length/itemsOnPageCount);

    useEffect( () => {
        dispatch(pagesCountUpdated(currentPageCount));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPageCount, pagesCountUpdated, search])

    return (
        <div className="character-list">
            {!(filteredCharacters.length===0) ? <div className="character-list__content">
                <div className="character-list__items">
                    {filteredCharacters.filter( (_, index) => {
                        return index < itemsOnPageCount*page && index + 1 > itemsOnPageCount*(page-1)})
                        .map( (character) => 
                        <CharacterItem key={character.id}
                            id={character.id}
                            name={character.name}
                            img={character.img}
                        />)}
                </div>
                <PagesNavigation />
            </div> : 
            <div className="character-list__not-found">Not found</div>}
        </div>
    );
};

export default CharactersList;