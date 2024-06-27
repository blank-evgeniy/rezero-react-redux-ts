import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { pageSlice } from '../../store/reducers/pageSlice';
import { filterSlice, genderValues } from '../../store/reducers/filterSlice';

const GenderFilter:React.FC = () => {
    const {genderFilterUpdate} = filterSlice.actions;
    const {pageChanged} = pageSlice.actions;
    const {gender} = useAppSelector( state => state.filter);
    const dispatch = useAppDispatch();

    const handleChangegender = (e: React.ChangeEvent<HTMLInputElement>, newgender: genderValues) => {
        dispatch(pageChanged(1));
        if (!e.target.checked) dispatch(genderFilterUpdate("any"))
        else dispatch(genderFilterUpdate(newgender));
    }

    return (
        <div>
            <div>gender:</div>
            <div className="filter-checkbox">
                <input 
                    type="checkbox" 
                    checked={gender === "male"} 
                    id="male"
                    onChange={(e) => {handleChangegender(e, "male")}} 
                />
                <label htmlFor="male" >male</label>
            </div>

            <div className="filter-checkbox">
                <input 
                    type="checkbox" 
                    checked={gender === "female"} 
                    id="female"
                    onChange={(e) => {handleChangegender(e, "female")}} 
                />
                <label htmlFor="female" >female</label>
            </div>
        </div>
    );
};

export default GenderFilter;