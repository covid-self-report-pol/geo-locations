export interface Coordinates {
    latitudine: string;
    longitudine: string;
}

export interface Locality extends Coordinates {
    nazione: string;
    cap: string;
    comuni: string[];
    provincia: string;
    regione: string;
}