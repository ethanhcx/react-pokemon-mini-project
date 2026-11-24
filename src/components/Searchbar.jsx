function SearchBar({ searchText, setSearchText }) {

    function handleChange(e) {
        setSearchText(e.target.value)
    }

    return (
        <input type="text"
        placeholder="Search for Pokemon"
        value={searchText}
        onChange={handleChange} />
    )
}

export default SearchBar