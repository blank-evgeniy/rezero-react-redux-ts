import React from "react";
import "./CharacterItem.scss"

interface CharacterItemProps {
    name: string;
    img: string;
}

const CharacterItem: React.FC<CharacterItemProps> = ({name, img}) => {
    const imagePath = "/images/characters/";

    return (
        <div className="character">
            <div className="character__name">{name}</div>
            <img src={imagePath+img} alt={`${name}'s photo`} className="character__image"></img>
        </div>
    );
};

export default CharacterItem;