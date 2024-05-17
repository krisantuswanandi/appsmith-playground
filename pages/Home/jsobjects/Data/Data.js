export default {
	async pokemons() {
		const limit = PokemonList.pageSize
		const offset = (PokemonList.pageNo - 1) * limit
		const pokemons = await getPokemons.run({ limit, offset })
		return Promise.all(pokemons.results.map(async (pokemon) => {
			const response = await fetch(pokemon.url)
			const result = await response.json()
			return {
				id: result.id,
				name: result.name,
				image: result.sprites.other.dream_world.front_default,
			}
		}))
	}
}