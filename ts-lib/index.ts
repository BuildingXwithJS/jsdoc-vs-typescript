import got from 'got';

const baseUrl = 'https://pokeapi.co/api/v2/';
const pokemonBaseUrl = `${baseUrl}pokemon/`;

class Pokemon {
  name: string = '';
  abilities: string[] = [];
  games: string[] = [];
  items: string[] = [];
  moves: string[] = [];
  types: string[] = [];
  sprites = {
    default: { front: '', back: '' },
    female: { front: '', back: '' },
    shiny: { front: '', back: '' },
    shinyFemale: { front: '', back: '' },
  };
  constructor(name: string, data: any) {
    this.name = name;
    this.abilities = data.abilities.map((slot: any) => slot.ability.name);
    this.games = data.game_indices.map((slot: any) => slot.version.name);
    this.items = data.held_items.map((slot: any) => slot.item.name);
    this.moves = data.moves.map((slot: any) => slot.move.name);
    this.types = data.types.map((slot: any) => slot.type.name);
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

export const getPokemon = async (name: string) => {
  const result = await got(`${pokemonBaseUrl}/${name}`).json();
  const pokemon = new Pokemon(name, result);
  return pokemon;
};

// getPokemon('pikachu').then((res) => console.log(res));
