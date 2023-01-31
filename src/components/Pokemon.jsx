import React, {useEffect, useState} from 'react';

const Example = (props) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, []);

    return (
        <div>
            <ul>

            </ul>
            {pokemon.map((character, index)=>{
                return (<li key={index}>{character.name}</li>)
            })}
        </div>
    );
}
export default Example;

