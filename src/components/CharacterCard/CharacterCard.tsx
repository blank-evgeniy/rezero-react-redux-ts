import React, {ReactNode, useEffect, useState } from 'react';
import { capitalizeFirstLetter } from '../../auxiliary/auxiliary_functions';
import { InformationType } from '../../types/IAboutCharacter';

import './CharacterCard.scss';

interface CharacterCardProps {
    name: string,
    information: InformationType,
    img: string,
}

const CharacterCard: React.FC<CharacterCardProps> = ({name, information, img}) => {
    const imagePath = "/images/characters/";
    const [informationList, setInformationList] = useState<ReactNode[]>([]);

    useEffect( () => {
        setInformationList(informationToJSX(information));
    }, [information])

    const informationToJSX = (information: InformationType): ReactNode[] => {
        const newInformation: ReactNode[] = [];
        for (const key in information)  {
            newInformation.push(
            <div 
                key={key} 
                className='character-card__information-item'
            >
                <p>{capitalizeFirstLetter(key)} </p>
                <p className='character-card__information-value'>{capitalizeFirstLetter(information[key])}</p>
            </div>
        )}
        return newInformation;
    }

    return (
        <div className='character-card'>
            <img className='character-card__img' src={imagePath+img} alt={`${name}'s photo`}/>
            <div className='character-card__information'>{informationList}</div>
        </div>
    );
};

export default CharacterCard;