import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { filterSlice, sexValues } from "../../store/reducers/filterSlice";
import "./FilterMenu.scss";
import useOutside from "../../hooks/useOutside";

const FilterMenu = () => {
    const {sex, races} = useAppSelector( state => state.filter);
    const {sexFilterUpdate, raceFilterUpdate} = filterSlice.actions;
    const dispatch = useAppDispatch();

    const filterRef = useRef<HTMLDivElement>(null);
    const menuRef = useOutside(() => {
        filterRef.current?.classList.remove("filter-menu__section_show")
    });

    const handleChangeSex = (e: React.ChangeEvent<HTMLInputElement>, newSex: sexValues) => {
        if (!e.target.checked) dispatch(sexFilterUpdate("any"))
        else dispatch(sexFilterUpdate(newSex));
    }

    const handleChangERace = (e: React.ChangeEvent<HTMLInputElement>, newRace: string) => {
        if (e.target.checked) dispatch(raceFilterUpdate([...races, newRace]))
        else dispatch(raceFilterUpdate(races.filter( (race) => {return race != newRace})))
    }

    const handleFilterClick = () => {
        filterRef.current?.classList.toggle("filter-menu__section_show")
    }

    return (
        <div ref={menuRef} className="filter-menu">
            <button
                onClick={handleFilterClick} 
                className="filter-menu__btn"
            >Filter</button>
            <div ref={filterRef} className="filter-menu__section">
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
                <div>race:</div>
                <div className="filter-checkbox">
                    <input 
                        type="checkbox" 
                        checked={races.indexOf("human") !== -1} 
                        onChange={(e) => {handleChangERace(e, "human")}} 
                    />
                    <span>Human</span>
                </div>
                
                <div className="filter-checkbox">
                    <input 
                        type="checkbox" 
                        checked={races.indexOf("half-elf") !== -1} 
                        onChange={(e) => {handleChangERace(e, "half-elf")}} 
                    />
                    <span>Half-elf</span>
                </div>
    
                <div className="filter-checkbox">
                    <input 
                        type="checkbox" 
                        checked={races.indexOf("oni") !== -1} 
                        onChange={(e) => {handleChangERace(e, "oni")}} 
                    />
                    <span>Oni</span>
                </div>

                <div className="filter-checkbox">
                    <input 
                        type="checkbox" 
                        checked={races.indexOf("spirit") !== -1} 
                        onChange={(e) => {handleChangERace(e, "spirit")}} 
                    />
                    <span>Spirit</span>
                </div>
            </div>
        </div>
    );
};

export default FilterMenu;