import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { charactersSlice } from '../../store/reducers/charactersSlice';
import { filterSlice, sexValues } from '../../store/reducers/filterSlice';

const GenderFilter:React.FC = () => {
    const {sexFilterUpdate} = filterSlice.actions;
    const {pageChanged} = charactersSlice.actions;
    const {sex} = useAppSelector( state => state.filter);
    const dispatch = useAppDispatch();

    const handleChangeSex = (e: React.ChangeEvent<HTMLInputElement>, newSex: sexValues) => {
        dispatch(pageChanged(1));
        if (!e.target.checked) dispatch(sexFilterUpdate("any"))
        else dispatch(sexFilterUpdate(newSex));
    }

    return (
        <div>
            <div>gender:</div>
            <div className="filter-checkbox">
                <input 
                    type="checkbox" 
                    checked={sex === "male"} 
                    id="male"
                    onChange={(e) => {handleChangeSex(e, "male")}} 
                />
                <label htmlFor="male" >male</label>
            </div>

            <div className="filter-checkbox">
                <input 
                    type="checkbox" 
                    checked={sex === "female"} 
                    id="female"
                    onChange={(e) => {handleChangeSex(e, "female")}} 
                />
                <label htmlFor="female" >female</label>
            </div>
        </div>
    );
};

export default GenderFilter;