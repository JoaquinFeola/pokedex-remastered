interface Ability {
    ability: {
        name?: string;
        url?: string;
    };
    is_hidden: boolean;
    slot: number;
};
interface PokemonStat {
    base_stat: number;
    effor: number;
    stat: {
        name: string;
        url: string;
    };
};
interface PokemonType {
    slot: number;
    type: {
        name: string;
        url: string;
    }
};
interface Sprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
        dream_world: {
            front_default: string | null;
            front_female: string | null;
        };
        home: {
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
        };
        "official-artwork": {
            front_default: string | null;
            front_shiny: string | null;
        };

    }
}

export interface Pokemon {
    name?: string;
    id?: number;
    abilities: Array<Ability>;
    is_default: boolean;
    location_area_encounters: string;
    stats: Array<PokemonStat>;
    weight: number;
    height: number;
    types: Array<PokemonType>
    sprites: Sprites;

}