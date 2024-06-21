import { useState, useEffect, useContext } from "react";
import PokemonCard from "./PokemonCard";
import { PokemonContext } from "../Context/PokemonContext";

function Home() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const { all_poke, setPokeUsingApi } = useContext(PokemonContext);
  // const API = process.env.REACT_APP_POKEMON_API_KEY

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        // We can also use ENVIRONMENT VARIABLES (.env) to fetch this API with reference of   const API = process.env.REACT_APP_POKEMON_API_KEY
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
        );
        const data = await response.json();
        const pokemonData = await Promise.all(
          data.results.map(async (poke) => {
            const pokeDetailsResponse = await fetch(poke.url);
            const pokeDetails = await pokeDetailsResponse.json();
            return {
              ...poke,
              frontImageUrl: pokeDetails.sprites.front_default,
              backImageUrl: pokeDetails.sprites.back_default,
              // abilities: pokeDetails.abilities,
              height: pokeDetails.height,
              weight: pokeDetails.weight,
              abilities: pokeDetails.abilities.map((ability) => ({
                name: ability.ability.name,
              })),
              stats: pokeDetails.stats.map((stat) => ({
                name: stat.stat.name,
                base_stat: stat.base_stat,
              })),
            };
          })
        );
        setPokemon(pokemonData);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, []);
  setPokeUsingApi(pokemon);

  if (loading) return <p>Loading...</p>;
  console.log(all_poke);

  return (
    <div className="w-full min-h-[100vh] flex items-center flex-col py-10 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-yellow-500  via-blue-400 to-blue-500">
      <img
        src="https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png"
        alt=""
      />
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="m-10 rounded-lg p-2 sm:w-[400px] w-[300px] h-[50px] text-xl"
          placeholder="Search pokemon"
          type="text"
        />
      </div>
      {
        <div onClick={()=>scrollToTop()} className="flex flex-wrap gap-3 justify-center">
          {all_poke
            .filter((item) => {
              const searchTerm = search.toLowerCase(); 
              return searchTerm === ""
                  ? item
                  : item.name.toLowerCase().includes(searchTerm);
          })
            .map((item) => (
              <PokemonCard
                name={item.name}
                frontImageUrl={item.frontImageUrl}
                height={item.height}
                weight={item.weight}
                abilities={item.abilities}
              />
            ))}
        </div>
      }
    </div>
  );
}

export default Home;
