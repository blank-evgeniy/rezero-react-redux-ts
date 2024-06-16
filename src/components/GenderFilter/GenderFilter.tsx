import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { charactersSlice } from '../../store/reducers/charactersSlice';
import { filterSlice, sexValues } from '../../store/reducers/filterSlice';

const GenderFilter:React.FC = () => {
    const {sexFilterUpdate} = filterSlice.actions;
    const {firstPage} = charactersSlice.actions;
    const {sex} = useAppSelector( state => state.filter);
    const dispatch = useAppDispatch();

    const handleChangeSex = (e: React.ChangeEvent<HTMLInputElement>, newSex: sexValues) => {
        dispatch(firstPage());
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
                    onChange={(e) => {handleChangeSex(e, "male")}} 
                />
                <span>Male</span>
            </div>

            <div className="filter-checkbox">
                <input 
                    type="checkbox" 
                    checked={sex === "female"} 
                    onChange={(e) => {handleChangeSex(e, "female")}} 
                />
                <span>Female</span>
            </div>
        </div>
    );
};

export default GenderFilter;