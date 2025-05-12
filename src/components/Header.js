import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";
// import prodData from "../utils/mockData.js";

// Receives the onSearch function as a prop from App.js.
const Header = ({ onSearch, searchText }) => {
    //Listens to input changes (typing, backspace, etc.). Extracts the input string (e.target.value). Calls the onSearch prop which is passed from App.js.
    const handleSearch = (e) => {
        const text = e.target.value;
        //Also calls the parent’s onSearch function with current input for filtering.
        onSearch(text);
    };
    return (
        <div id="headerContainer">
            <div id="logoContainer"><img src={LOGO_URL} /></div>
            <input placeholder="Search products..." id="searchBar" value={searchText} type="search" onChange={handleSearch}></input>
            <div id="navBar">
                <ul>
                    <li><a href="#" target="_blank">Home</a></li>
                    <li><a href="#" target="_blank">About us</a></li>
                    <li><a href="#" target="_blank">Cart</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;