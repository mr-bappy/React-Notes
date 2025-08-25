import './Pokemon.css'

import { use, useEffect, useState } from 'react';
import './Pokemon.css';
import { PokemonCard } from './PokemonCard';

export const Pokemon = () => {

    const [pokemon, setPokemon] = useState([]);
    const [searchPokemon, setSearchPokemon] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    const API = "https://pokeapi.co/api/v2/pokemon?limit=124"

    async function fetchPokemonApi(){
        try{
            setLoading(true);
            // fetching API url
            const res = await fetch(API);
            const data = await res.json();

            // fetching url present for each pokemon data
            const detailedPokemon = data.results.map(async (curPokemon) => {
                const res = await fetch(curPokemon.url);
                const data = await res.json();
                return data;
            });

            // turning promise into data
            const detailedData = await Promise.all(detailedPokemon);
            
            if(detailedData && detailedData.length){
                setPokemon(detailedData);
                setLoading(false);
            }
        }catch(error){
            setErrorMsg(error);
            setLoading(false);
        }
    }

    function handleSearchPokemon(e){
        setSearchPokemon(e.target.value);
    }

    const searchData = pokemon.filter((curPokemon)=>curPokemon.name.toLowerCase().includes(searchPokemon.toLowerCase()));

    useEffect(()=>{
        fetchPokemonApi();
    },[])

    // console.log(pokemon);
    console.log(searchData);

    if(loading){
        return <h1>Loading...</h1>
    }
    if(errorMsg){
        return <h1>Something went wrong! Please try again.</h1>
    }

    return (
        <>
        <section className='pokemon-container'>
            <div>
                <h1 className='pokemon-heading'>Lets Catch Pokémon</h1>
            </div>
            <div className='search-pokemon-container'>
                <div className='search-pokemon'>
                    <input 
                    type="text" 
                    placeholder='enter pokemon name...'
                    value={searchPokemon}
                    onChange={(e)=>handleSearchPokemon(e)}
                    />
                    <button>Search</button>
                </div>
            </div>
            <div>
                <ul className='cards-container'>
                    {
                        searchData && searchData.length && searchData.map((curPokemonData)=><PokemonCard key={curPokemonData.id} pokemonData={curPokemonData}/>)
                    }
                </ul>
            </div>
        </section>
        </>
    )
}