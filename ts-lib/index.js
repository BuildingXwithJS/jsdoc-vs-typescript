import got from 'got';
const baseUrl = 'https://pokeapi.co/api/v2/';
const pokemonBaseUrl = `${baseUrl}pokemon/`;
/**
 * Pokemon instance with data
 */
export class Pokemon {
    /**
     * Creates an instance of Pokemon.
     * @param {string} name Pokemon name
     * @param {any} data Pokemon data
     */
    constructor(name, data) {
        /**
         * Pokemon name
         */
        this.name = '';
        /**
         * List of pokemon's abilities
         */
        this.abilities = [];
        /**
         * List of games for current pokemon
         */
        this.games = [];
        /**
         * List of items held by current pokemon
         */
        this.items = [];
        /**
         * List of moves current pokemon is capable of
         */
        this.moves = [];
        /**
         * List of types for current pokemon
         */
        this.types = [];
        /**
         * Collection of sprites
         */
        this.sprites = {
            default: { front: '', back: '' },
            female: { front: '', back: '' },
            shiny: { front: '', back: '' },
            shinyFemale: { front: '', back: '' },
        };
        this.name = name;
        this.abilities = data.abilities.map((slot) => slot.ability.name);
        this.games = data.game_indices.map((slot) => slot.version.name);
        this.items = data.held_items.map((slot) => slot.item.name);
        this.moves = data.moves.map((slot) => slot.move.name);
        this.types = data.types.map((slot) => slot.type.name);
        this.sprites.default.front = data.sprites.front_default;
        this.sprites.default.back = data.sprites.back_default;
        this.sprites.female.front = data.sprites.front_female;
        this.sprites.female.back = data.sprites.back_female;
        this.sprites.shiny.front = data.sprites.front_shiny;
        this.sprites.shiny.back = data.sprites.back_shiny;
        this.sprites.shinyFemale.front = data.sprites.front_shiny_female;
        this.sprites.shinyFemale.back = data.sprites.back_shiny_female;
    }
}
/**
 * Get pokemon instance by name
 *
 * @param name Pokemon name
 */
export const getPokemon = async (name) => {
    const result = await got(`${pokemonBaseUrl}/${name}`).json();
    const pokemon = new Pokemon(name, result);
    return pokemon;
};
// getPokemon('pikachu').then((res) => console.log(res));
