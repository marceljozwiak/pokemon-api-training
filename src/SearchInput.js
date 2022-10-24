import React from "react";

const SearchInput = ({searchChange}) => {
    return (
        <form>
            <label> Enter Pokemon Id
                <input type="text" onChange={searchChange}/>
            </label>
        </form>
    )
}

export default SearchInput;