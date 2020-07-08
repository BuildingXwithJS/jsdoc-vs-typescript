import got from 'got';

const baseUrl = 'https://pokeapi.co/api/v2/';
const pokemonBaseUrl = `${baseUrl}pokemon/`;

/**
 * Pokemon instance with data
 *
 * @class Pokemon
 */
class Pokemon {
  /**
   * Pokemon name
   *
   * @type string
   * @memberOf Pokemon
   */
  name = '';

  /**
   * List of pokemon's abilities
   *
   * @type string[]
   * @memberOf Pokemon
   */
  abilities = [];

  /**
   * List of games for current pokemon
   *
   * @type string[]
   * @memberOf Pokemon
   */
  games = [];

  /**
   * List of items held by current pokemon
   *
   * @type string[]
   * @memberOf Pokemon
   */
  items = [];

  /**
   * List of moves current pokemon is capable of
   *
   * @type string[]
   * @memberOf Pokemon
   */
  moves = [];

  /**
   * List of types for current pokemon
   *
   * @type string[]
   * @memberOf Pokemon
   */
  types = [];

  /**
   * Collection of sprites
   *
   * @type {{default: {front: string, back: sting}, female: {front: string, back: sting}, shiny: {front: string, back: sting}, shinyFemale: {front: string, back: sting}}}
   * @memberOf Pokemon
   */
  sprites = {
    default: { front: '', back: '' },
    female: { front: '', back: '' },
    shiny: { front: '', back: '' },
    shinyFemale: { front: '', back: '' },
  };

  /**
   * Creates an instance of Pokemon.
   * @param {string} name
   * @param {object} data
   *
   * @memberOf Pokemon
   */
  constructor(name, data) {
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
 * Gets the Pokemon instance by name
 *
 * @param {string} name
 * @returns {Promise<Pokemon>}
 */
export const getPokemon = async (name) => {
  const result = await got(`${pokemonBaseUrl}/${name}`).json();
  const pokemon = new Pokemon(name, result);
  return pokemon;
};

// getPokemon('pikachu').then((res) => console.log(res));
