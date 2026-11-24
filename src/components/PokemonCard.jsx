import { Link } from "react-router-dom";

function PokemonCard({ pokemon }) {
    return (
        <Link to={`/pokemon/${pokemon.name}`}>
            <img src={pokemon.image} />
            <h3>{pokemon.name}</h3>
        </Link>
    )
}

export default PokemonCard;