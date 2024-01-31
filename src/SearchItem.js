import React from 'react';

const SearchItem = ({search, setSearch}) => 
{
    return(
    <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='search'>Search</label>
        <input 
            type="text"
            id='search'
            role='searchbox'
            placeholder='Search in Items'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}>
        </input>
    </form>
)}

export default SearchItem;