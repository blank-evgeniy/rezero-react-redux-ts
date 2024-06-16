import React from 'react';
import "./PagesNavigation.scss"
import { MdPlayArrow } from "react-icons/md";
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { charactersSlice } from '../../store/reducers/charactersSlice';

const PagesNavigation: React.FC = () => {
    const dispatch = useAppDispatch();
    const {nextPage, prevPage} = charactersSlice.actions;
    const {page, pagesCount} = useAppSelector(state => state.characters);

    return (
        <div className="pages-navigation">
            <button className="pages-navigation__button" 
                disabled={pagesCount === 1 || page === 1} 
                onClick={ () => {dispatch(prevPage())}}
            >
                <MdPlayArrow size={'30px'} style={{transform: 'rotate(180deg)'}}/>
            </button>

            <div className="pages-navigation__info">
                {`Page ${page}/${pagesCount}`}
            </div>

            <button className="pages-navigation__button"
                disabled={pagesCount == 1 || page === pagesCount} 
                onClick={ () => {dispatch(nextPage())}}
            >
                <MdPlayArrow size={'30px'}/>
            </button>
        </div>
    );
};

export default PagesNavigation;