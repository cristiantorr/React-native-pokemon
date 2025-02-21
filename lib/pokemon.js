export async function getPokemons() {
  const ALLPOKEMON = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10";
  const rawData = await fetch(ALLPOKEMON);
  const json = await rawData.json();

  const { results } = json;

  // Mapear cada Pokémon, obteniendo las estadísticas de cada uno
  const pokemonsWithStats = await Promise.all(
    results.map(async (item) => {
      const { name, url } = item;
      const img = `https://img.pokemondb.net/sprites/home/normal/${name.toLowerCase()}.png`;

      const regex = /\/([^\/]+)\/?$/;
      const match = url.match(regex);
      const pokeid = match ? match[1] : null;

      // Llamamos a getPokemondStats para obtener las estadísticas de este Pokémon
      const stats = await getPokemonStats(pokeid);

      return {
        name,
        image: img,
        pokeid: pokeid,
        url,
        stats: stats, // Agregamos las estadísticas al objeto
      };
    })
  );

  return pokemonsWithStats;
}

export async function getPokemonStats(pokeid) {
  const ALLPOKEMON = `https://pokeapi.co/api/v2/pokemon/${pokeid}/`;

  try {
    const rawData = await fetch(ALLPOKEMON);
    const json = await rawData.json();

    // Crear un objeto con las estadísticas de interés
    const stats = json.stats.reduce((acc, stat) => {
      if (stat.stat.name === "hp") acc.hp = stat.base_stat;
      if (stat.stat.name === "attack") acc.attack = stat.base_stat;
      if (stat.stat.name === "defense") acc.defense = stat.base_stat;
      if (stat.stat.name === "speed") acc.speed = stat.base_stat;
      // Puedes agregar más si lo deseas
      return acc;
    }, {});

    return stats;
  } catch (error) {
    console.error(
      "Error en la consulta para obtener las estadísticas del Pokémon:",
      error
    );
    return {}; // Retorna un objeto vacío en caso de error
  }
}

export async function getPokemonDetails(pokename) {
  const ALLPOKEMON = `https://pokeapi.co/api/v2/pokemon/${pokename}/`;

  try {
    const rawData = await fetch(ALLPOKEMON);
    const json = await rawData.json();
    console.log(json);
    const img = `https://img.pokemondb.net/sprites/home/normal/${json.name.toLowerCase()}.png`;

    const stats = json.stats.reduce((acc, stat) => {
      if (stat.stat.name === "hp") acc.hp = stat.base_stat;
      if (stat.stat.name === "attack") acc.attack = stat.base_stat;
      if (stat.stat.name === "defense") acc.defense = stat.base_stat;
      if (stat.stat.name === "speed") acc.speed = stat.base_stat;

      return acc;
    }, {});
    return {
      image: img,
      name: json.name,
      weight: json.weight,
      height: json.height,
      stats: stats,
    };
  } catch (error) {
    console.error("Error en la consulta del detalle del Pokémon:", error);
    return {}; // Retorna un objeto vacío en caso de error
  }
}
