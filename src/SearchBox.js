import React from "react";

const SearchBox = ({searchField, searchChange})=>{
    // console.log(searchChange);

    return(
        <div className="tc ">
            <input 
            className=" tc pa3 ba b--green bg-lightest-blue w-25 bw1" 
            type="text" 
            placeholder="Seach about Robos...."
            onChange={searchChange} 
            />
        </div>
    );
};

export default SearchBox;
