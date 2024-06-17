import React from 'react';
import "./PagesNavigation.scss"
import { MdPlayArrow } from "react-icons/md";
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { charactersSlice } from '../../store/reducers/charactersSlice';
import { GoDotFill } from "react-icons/go";

const PagesNavigation: React.FC = () => {
    const dispatch = useAppDispatch();
    const {nextPage, prevPage, pageChanged} = charactersSlice.actions;
    const {page, pagesCount} = useAppSelector(state => state.characters);
    const pagesNumbers = Array.from({length: pagesCount}, (_, i) => i + 1);

    return (
        <div className="pages-navigation">
            <div className="pages-navigation__container">
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
            <div className="pages-navigation__links">
                {pagesNumbers.map((pageNumber, index) => 
                    <button
                        disabled = {index+1 === page}
                        key={pageNumber} 
                        className="pages-navigation__link-dot"
                        onClick={() => dispatch(pageChanged(pageNumber))} 
                    ><GoDotFill/></button>
                    
                )}
            </div>   
        </div>
    );
};

export default PagesNavigation;