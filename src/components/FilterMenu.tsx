import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { filterSlice } from "../store/reducers/filterSlice";

const FilterMenu = () => {
    const {sex, races} = useAppSelector( state => state.filter);
    const {sexFilterUpdate, raceFilterUpdate} = filterSlice.actions;
    const dispatch = useAppDispatch();

    const handleChangeSex = (newSex: "any" | "male" | "female") => {
        if (newSex == sex) dispatch(sexFilterUpdate("any"))
        else dispatch(sexFilterUpdate(newSex));
    }

    const handleChangERace = (e: React.ChangeEvent<HTMLInputElement>, newRace: string) => {
        if (e.target.checked) dispatch(raceFilterUpdate([...races, newRace]))
        else dispatch(raceFilterUpdate(races.filter( (race) => {return race != newRace})))
    }

    return (
        <div>
            <div>
                <input 
                    type="checkbox" 
                    checked={sex === "male"} 
                    onChange={() => {handleChangeSex("male")}} 
                />
                <span>Male</span>
            </div>

            <div>
                <input 
                    type="checkbox" 
                    checked={sex === "female"} 
                    onChange={() => {handleChangeSex("female")}} 
                />
                <span>Female</span>
            </div>

            <div>
                <input 
                    type="checkbox" 
                    checked={races.indexOf("human") !== -1} 
                    onChange={(e) => {handleChangERace(e, "human")}} 
                />
                <span>Human</span>
                <input 
                    type="checkbox" 
                    checked={races.indexOf("half-elf") !== -1} 
                    onChange={(e) => {handleChangERace(e, "half-elf")}} 
                />
                <span>Half-elf</span>
                <input 
                    type="checkbox" 
                    checked={races.indexOf("oni") !== -1} 
                    onChange={(e) => {handleChangERace(e, "oni")}} 
                />
                <span>Oni</span>
                <input 
                    type="checkbox" 
                    checked={races.indexOf("spirit") !== -1} 
                    onChange={(e) => {handleChangERace(e, "spirit")}} 
                />
                <span>Spirit</span>
            </div>
        </div>
    );
};

export default FilterMenu;