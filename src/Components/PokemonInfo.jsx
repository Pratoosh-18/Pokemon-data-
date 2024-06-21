import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../Context/PokemonContext";

const PokemonInfo = () => {
  const { pokemonname } = useParams();
  const { all_poke } = useContext(PokemonContext);
  return (
    <div className="w-full min-h-[100vh] flex flex-col pb-10 sm:py-10 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-blue-400 to-blue-500">
      {all_poke
        .filter((item) => {
          return item.name === pokemonname;
        })
        .map((item) => {
          return (
            <div>
              <div className="w-full flex justify-center items-center text-2xl py-4 font-semibold">
                {pokemonname.charAt(0).toUpperCase() + pokemonname.slice(1)}{" "}
                details:
              </div>

              <div className="mx-4 md:mx-10 lg:mx-60 bg-gray-100 p-4 sm:p-8 rounded-3xl">
                <div className="w-full flex flex-col sm:flex-row items-center justify-center">
                  <img
                    className="h-[200px] w-[200px]"
                    src={item.frontImageUrl}
                    alt=""
                  />
                  <img
                    className="h-[200px] w-[200px]"
                    src={item.backImageUrl}
                    alt=""
                  />
                </div>
                <p className="text-3xl w-full flex justify-center pb-3">
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </p>

                <div className="lg:mx-24">
                  <p className="flex items-center gap-2">
                    <p className="text-xl">Height :</p>
                    <p className="font-semibold">{item.height}</p>
                  </p>
                  <p className="flex items-center gap-2">
                    <p className="text-xl">Weight :</p>
                    <p className="font-semibold">{item.weight}</p>
                  </p>

                  <div className="flex gap-3">
                    <div className="flex gap-2">
                      <div className="text-xl">Abilities :</div>
                      <div className="font-semibold">
                        {item.abilities.map((item, index) => (
                          <p key={index}>
                            {item.name.charAt(0).toUpperCase() +
                              item.name.slice(1)}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex gap-2">
                      <div className="text-xl">Stats :</div>
                      <div className="font-semibold">
                        {item.stats.map((item, index) => (
                          <p className="flex">
                            <p key={index}>
                              {item.name.charAt(0).toUpperCase() +
                                item.name.slice(1)}
                            </p>
                            <p className="mx-2">:</p>
                            <p key={index}>{item.base_stat}</p>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default PokemonInfo;
