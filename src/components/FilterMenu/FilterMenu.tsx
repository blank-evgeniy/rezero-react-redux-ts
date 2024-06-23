import React, { useRef } from "react";
import useOutside from "../../hooks/useOutside";
import GenderFilter from "../GenderFilter/GenderFilter";
import RacesFilter from "../RacesFilter/RacesFilter";

import "./FilterMenu.scss";

const FilterMenu: React.FC = () => {

    const filterRef = useRef<HTMLDivElement>(null);
    const menuRef = useOutside(() => {
        filterRef.current?.classList.remove("filter-menu__section_show")
    });

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
                <GenderFilter />
                <RacesFilter />
            </div>
        </div>
    );
};

export default FilterMenu;