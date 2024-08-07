import axios from 'axios'
import React, {useEffect, useState} from 'react'

export function Pokemon() {
    const [pokemonData, setPokemonData] = useState([])
    const url = "https://pokeapi.co/api/v2/pokemon/charizard"
    useEffect(() =>{
        const fetchData = async () => {
            try {
                // Realizando la peticion con fetch
                // const response = await fetch("https://pokeapi.co/api/v2/pokemon/charizard")
                // const data = await response.json()

                //  Realizando la peticion con axios
                const response = await axios.get(url)
                setPokemonData(response.data)


                console.log('Datos del pokemon -->',response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [])
    return (
        <div>
            <h1>Pokemon</h1>
            {pokemonData.name && <h2>{pokemonData.name}</h2>}
            {pokemonData.types && <h2>{pokemonData.types[0].type.name}</h2>}
            {pokemonData.abilities && (
                <p>
                    Habilidades: {" "}
                    {pokemonData.abilities.map(value => value.ability.name).join(" / ")}
                </p>
            ) }
        </div>
    )
}
