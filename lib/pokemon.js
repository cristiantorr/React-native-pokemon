export async function getPokemons() {
  const ALLPOKEMON = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=24";
  const rawData = await fetch(ALLPOKEMON);
  const json = await rawData.json();
  /* console.log(json); */

  const { results } = json;

  return results.map((item) => {
    const { name, url } = item;
    // crea la imagen
    const img = `https://img.pokemondb.net/sprites/home/normal/${name.toLowerCase()}.png`;
    // Expresión regular para capturar el número después de "pokemon/"
    const regex = /\/([^\/]+)\/?$/;
    const match = url.match(regex);
    const pokeid = match ? match[1] : null; // El ID es el primer grupo capturado
    console.log(pokeid, url);
    /*  imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatName(
      pokemon.name.toLowerCase()
    )}.gif`, */

    return {
      name,
      image: img,
      pokeid: pokeid,
      url: url,
    };
  });
}
