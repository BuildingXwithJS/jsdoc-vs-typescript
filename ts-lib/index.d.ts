/**
 * Pokemon instance with data
 */
export declare class Pokemon {
    /**
     * Pokemon name
     */
    name: string;
    /**
     * List of pokemon's abilities
     */
    abilities: string[];
    /**
     * List of games for current pokemon
     */
    games: string[];
    /**
     * List of items held by current pokemon
     */
    items: string[];
    /**
     * List of moves current pokemon is capable of
     */
    moves: string[];
    /**
     * List of types for current pokemon
     */
    types: string[];
    /**
     * Collection of sprites
     */
    sprites: {
        default: {
            front: string;
            back: string;
        };
        female: {
            front: string;
            back: string;
        };
        shiny: {
            front: string;
            back: string;
        };
        shinyFemale: {
            front: string;
            back: string;
        };
    };
    /**
     * Creates an instance of Pokemon.
     * @param {string} name Pokemon name
     * @param {any} data Pokemon data
     */
    constructor(name: string, data: any);
}
/**
 * Get pokemon instance by name
 *
 * @param name Pokemon name
 */
export declare const getPokemon: (name: string) => Promise<Pokemon>;
