import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import "./Search.scss"
import { filterSlice } from "../../store/reducers/filterSlice";

const Search = () => {
    const {search} = useAppSelector(state => state.filter)
    const {searhFilterUpdate} = filterSlice.actions;
    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searhFilterUpdate(e.target.value))
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