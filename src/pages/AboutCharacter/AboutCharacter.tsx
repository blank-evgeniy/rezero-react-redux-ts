import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import { IAboutCharacter } from '../../types/IAboutCharacter';

import CharactersData from "./../../data/about_characters.json"

import './AboutCharacter.scss'

type currentCharacterData = IAboutCharacter | null;

const AboutCharacter:React.FC = () => {
    const [characterData, setCharacterData] = useState<currentCharacterData>(null);
    const {id} = useParams();

    useEffect( () => {
        setCharacterData(getCharacterData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getCharacterData = ():IAboutCharacter => {
        return CharactersData.find( (character) => character.id.toString() === id)!;
    }

    return (
        <div className='about-character'>
            <Header link='/characters'/>
            <main className='about-character__main'>
                {characterData == null ? 
                <div className='about-character__not-found'>The character's page was not found</div> :
                <>
                    <CharacterCard name={characterData.name} information={characterData.information} img={characterData.img}/>
                    <div className='about-character__description'>
                        <h1 className='about-character__name'>{characterData.name}</h1>
                        <p className='about-character__text'>{characterData.description}</p>
                    </div>
                </>
                }
            </main>
        </div>
    );
};

export default AboutCharacter;