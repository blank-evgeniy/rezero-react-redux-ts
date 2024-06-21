import "./Header.scss"
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PiArrowUUpLeft } from "react-icons/pi";

interface HeaderProps{
    title: string;
}

const Header:React.FC<HeaderProps> = ({title}) => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <button className="header__button" 
            onClick={() => {navigate(-1)}}><PiArrowUUpLeft className="character-list__back-btn-img" size={"30px"}/></button>
            { title && <h1 className="header__title">{title}</h1>}
        </header>
    );
};

export default Header;