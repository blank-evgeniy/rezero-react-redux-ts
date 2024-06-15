import React from "react";

interface CharacterItemProps {
    name: string;
    img: string;
}

const CharacterItem: React.FC<CharacterItemProps> = ({name, img}) => {

    return (
        <div className="character">
            <div className="character__name">{name}</div>
            <img src={img} alt={`${name}'s photo`} className="character__image"></img>
        </div>
    );
};

export default CharacterItem;