const API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon-species';

export interface Pokemon {
  name: string;
  url: string;
}

export const searchPokemons = async (query: string): Promise<Pokemon[]> => {
  const response = await fetch(`${API_BASE_URL}?limit=1000`);
  const data = await response.json();

  const results = await Promise.all(
    data.results.map(async (pokemon: Pokemon) => {
      const pokemonDetails = await fetch(pokemon.url).then(res => res.json());
      const name_ja = pokemonDetails.names.find((name: { language: { name: string }; name: string }) => name.language.name === 'ja').name;
      return { name: name_ja, url: pokemon.url };
    })
  );

  // 入力されたクエリに基づいてフィルタリング
  return results.filter(pokemon => pokemon.name.includes(query));
};