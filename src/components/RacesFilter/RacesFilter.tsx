import React, { useEffect, useState } from 'react';
import CharactersData from '../../data/character.json';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { filterSlice } from '../../store/reducers/filterSlice';
import { charactersSlice } from '../../store/reducers/charactersSlice';

const RacesFilter: React.FC = () => {
    const [racesList, setRacesList] = useState<string[]>([]);

    const dispatch = useAppDispatch();
    const {races} = useAppSelector( state => state.filter);
    const {raceFilterUpdate} = filterSlice.actions;
    const {pageChanged} = charactersSlice.actions;

    useEffect( () => {
        setRacesList(getRacesList);
    }, [])

    const getRacesList = (): string[] => {
        return (
            CharactersData
                .map((obj) => {return obj.race})
                .filter((character, i, ar) => ar.indexOf(character) === i)
        )
    }

    const handleChangRace = (e: React.ChangeEvent<HTMLInputElement>, newRace: string) => {
        dispatch(pageChanged(1));
        if (e.target.checked) dispatch(raceFilterUpdate([...races, newRace]))
        else dispatch(raceFilterUpdate(races.filter( (race) => {return race != newRace})))
    }

    return (
        <div>
            <div>race:</div>

            {racesList.map( (race, i) => 
                <div className="filter-checkbox" key={i}>
                    <input 
                        type="checkbox" 
                        checked={races.indexOf(race) !== -1}
                        id={race} 
                        onChange={(e) => {handleChangRace(e, race)}} 
                    />
                    <label htmlFor={race}>{race}</label>
                </div> 
            )}
        </div>
    );
};

export default RacesFilter;