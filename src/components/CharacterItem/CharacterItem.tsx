import React from "react";
import { Link } from "react-router-dom";

import "./CharacterItem.scss";

interface CharacterItemProps {
    id: number;
    name: string;
    img: string;
}

const CharacterItem: React.FC<CharacterItemProps> = ({id, name, img}) => {
    const imagePath = "/images/characters/";

    return (
        <div className="character">
            <div className="character__name">{name}</div>
            <Link to={`/characters/${id}`}><img src={imagePath+img} alt={`${name}'s photo`} className="character__image"/></Link>
        </div>
    );
};

export default CharacterItem;