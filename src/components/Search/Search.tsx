import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { filterSlice } from "../../store/reducers/filterSlice";
import { charactersSlice } from "../../store/reducers/charactersSlice";

import "./Search.scss"

const Search: React.FC = () => {
    const {search} = useAppSelector(state => state.filter)
    const {pageChanged} = charactersSlice.actions;
    const {searhFilterUpdate} = filterSlice.actions;
    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(pageChanged(1));
        dispatch(searhFilterUpdate(e.target.value));
    }

    return (
        <input
            type='text' 
            name='Search' 
            placeholder="Enter character name..." 
            className="search"
            value={search}
            onChange={ e => handleChange(e)}
        >
        </input>
    );
};

export default Search;