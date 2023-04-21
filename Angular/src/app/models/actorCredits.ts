export interface ActorCredits {
    adult:                boolean;
    also_known_as:        string[];
    biography:            string;
    birthday:             Date;
    deathday:             null;
    gender:               number;
    homepage:             null;
    id:                   number;
    imdb_id:              string;
    known_for_department: string;
    name:                 string;
    place_of_birth:       string;
    popularity:           number;
    profile_path:         string;
    credits:              Credits;
}

export interface Credits {
    cast: Cast[];
    crew: Cast[];
}

export interface Cast {
    adult:             boolean;
    backdrop_path:     null | string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       null | string;
    release_date:      string;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
    character?:        string;
    credit_id:         string;
    order?:            number;
    department?:       Department;
    job?:              string;
}

export enum Department {
    Crew = "Crew",
    Directing = "Directing",
    Production = "Production",
    Writing = "Writing",
}

export enum OriginalLanguage {
    De = "de",
    En = "en",
    Fr = "fr",
    It = "it",
}
