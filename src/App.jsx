import { useState, useEffect } from "react"
import { Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import PokemonDetail from "./pages/PokemonDetail"
import Favourites from "./pages/Favourites"

function App() {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
                const data = await response.json()

                const formattedData = data.results.map((pokemon, index) => {
                    const id = index + 1;
                    return {
                        id, 
                        name: pokemon.name,
                        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                    }
                })

                setPokemon(formattedData)
            } catch(err) {
                console.log("Failed to load data",err);
            }   
        }
        
        fetchPokemon()
    }, [])

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home pokemon={pokemon} />} />
                <Route path="/pokemon/:name" element={<PokemonDetail />} />
                <Route path="/favourites" element={<Favourites />} />
            </Routes>
        </>
    )
}

export default App;