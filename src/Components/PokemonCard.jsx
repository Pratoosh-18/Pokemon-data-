import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ name, frontImageUrl, height, weight, abilities }) => {
  return (
    <Link to={`/pokemoninfo/${name}`}>
      <div className="hover:translate-y-[-5px] transition-all transition-duration:150ms  w-[340px] sm:w-[370px] bg-gray-100 rounded-xl p-4 flex flex-col ">
        <div className="w-full flex flex-col items-center pb-3">
          <img className="h-[150px] w-[150px]" src={frontImageUrl} alt="" />
          <p className="text-3xl">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </p>
        </div>
        <div className="text-lg">
          <p className="flex gap-2">
            <p className="text-xl">Height :</p>
            <p className="font-semibold">{height}</p>
          </p>

          <p className="flex gap-2">
            <p className="text-xl">Weight :</p>
            <p className="font-semibold">{weight}</p>
          </p>

          <div className="flex gap-3">
            <div className="flex gap-2">
              <div className="text-xl">Abilities :</div>
              <div className="font-semibold">
                {abilities.map((item, index) => (
                  <p key={index}>
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
