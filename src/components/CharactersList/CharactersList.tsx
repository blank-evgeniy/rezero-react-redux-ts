import { useEffect, useState } from "react";
import "./CharactersList.scss"
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { charactersSlice } from "../../store/reducers/charactersSlice";
import CharactersData from '../../data/character.json';
import CharacterItem from "../../components/CharacterItem/CharacterItem";
import PagesNavigation from "../PagesNavigation/PagesNavigation";

interface CharactersListProps{
    itemsOnPageCount: number;
}

const CharactersList:React.FC<CharactersListProps> = ({itemsOnPageCount}) => {
    const {characters, page} = useAppSelector(state => state.characters);
    const {search, sex, races} = useAppSelector(state => state.filter);
    const {charactersAdded, pagesCountUpdated} = charactersSlice.actions;
    const dispatch = useAppDispatch();
    const [isNotFound, setIsNotFound] = useState<boolean>(false);


    useEffect( ()=> {
        dispatch(charactersAdded(getCharacters()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

        setIsNotFound(charactersList.length===0);
        dispatch(pagesCountUpdated(Math.ceil(charactersList.length/itemsOnPageCount)));

        return charactersList.filter( (_character, index) => {
            return index < itemsOnPageCount*page &&  index + 1 > itemsOnPageCount*(page-1)
        });
    }

    return (
        <div className="character-list">
            {!isNotFound ? <div className="character-list__content">
                <div className="character-list__items">
                    {characters.map( (character) => 
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