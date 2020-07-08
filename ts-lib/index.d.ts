declare class Pokemon {
    name: string;
    abilities: string[];
    games: string[];
    items: string[];
    moves: string[];
    types: string[];
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
    constructor(name: string, data: any);
}
export declare const getPokemon: (name: string) => Promise<Pokemon>;
export {};
