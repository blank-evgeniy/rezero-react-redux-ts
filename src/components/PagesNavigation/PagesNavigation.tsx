import React from 'react';
import { MdPlayArrow } from "react-icons/md";
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { pageSlice } from '../../store/reducers/pageSlice';
import { GoDotFill } from "react-icons/go";

import "./PagesNavigation.scss"

const PagesNavigation: React.FC = () => {
    const dispatch = useAppDispatch();
    const {nextPage, prevPage, pageChanged} = pageSlice.actions;
    const {page, pagesCount} = useAppSelector(state => state.page);
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
                    ><GoDotFill size="24px"/></button>
                    
                )}
            </div>   
        </div>
    );
};

export default PagesNavigation;