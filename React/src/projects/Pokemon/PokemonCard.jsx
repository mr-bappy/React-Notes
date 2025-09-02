import './Pokemon.css'

export const PokemonCard = ({pokemonData}) => {
    return (
        <>
        <li className="pokemon-card-container">
           <figure className="pokemon-img-container">
                <img 
                src={pokemonData.sprites.other.showdown.front_default} 
                alt={pokemonData.name}
                className="pokemon-img"
                />
           </figure>
           <div>
                <h1 className="pokemon-heading-name">{pokemonData.name}</h1>
           </div>
           <div className="pokemon-info pokemon-highlight">
                <p>
                    {
                        pokemonData.types.map((curType) => curType.type.name).join(", ")
                    }
                </p>
           </div>
           <div className="cols-container">
                <div className="three-cols">
                    <div>
                        <p>
                            <span>Weight</span> {pokemonData.weight}
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>Height</span> {pokemonData.height}
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>Speed</span> {pokemonData.stats[5].base_stat}
                        </p>
                    </div>
            </div>
            <div className="three-cols">
                    <div>
                        <p>
                            <span>Experience</span> {pokemonData.base_experience}
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>Attack</span> {pokemonData.stats[1].base_stat}
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>Abilities</span> 
                            {
                                pokemonData.abilities.map((curAbility)=> {
                                    return curAbility.ability.name;
                                }).join(", ")
                            }
                        </p>
                    </div>
            </div>
           </div>
        </li>
        </>
    )
}