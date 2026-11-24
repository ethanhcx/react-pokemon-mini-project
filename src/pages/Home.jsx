import {useState} from "react"
import SearchBar from "../components/Searchbar";
import PokemonList from "../components/PokemonList";

/* the search state is defined in the Home page as no other page/component needs access to 
the search text so it does not ned to be defined in App */

function Home({ pokemon }) {
    const [searchText, setSearchText] = useState("")
    const filteredPokemon = pokemon.filter((p) => 
    p.name.toLowerCase().includes(searchText.toLowerCase()))
    return (
        <div>
            <h1>Pokedex</h1>
            <SearchBar searchText={searchText} setSearchText={setSearchText} />
            <PokemonList pokemon={filteredPokemon}/>
        </div>
    )
}

export default Home;