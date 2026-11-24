import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function PokemonDetail() {
    const { name } = useParams()
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
    async function fetchPokemon() {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            const data = await response.json()
            setPokemon(data)
        } catch(err) {
            console.log("Failed to load Pokemon details", err);
        }
    }

   fetchPokemon()
    
}, [name])

    if (!pokemon) return <p>Loading...</p>;   
    return (
        <div>
            <Link to="/">Back</Link>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} />

            <h3>Types</h3>
            <ul>
                {pokemon.types.map((t) => (
                    <li key={t.type.name}>{t.type.name}</li>
                ))}
            </ul>
        </div>
        
    )
}

export default PokemonDetail;