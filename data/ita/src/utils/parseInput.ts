import { Locality } from '../types';

function fixRegione(regione: string): string {
    return (regione === 'Abruzzi' ? 'Abruzzo' : regione);
}

export function parseInput(input: string): Locality[] {
    return input
        .split('\n')
        .map(row => row
            .split('\t')
        )
        .map(row => ({
            nazione: 'ITA',
            cap: row[1],
            comuni: [row[2]],
            provincia: row[5],
            regione: fixRegione(row[3]),
            latitudine: row[9],
            longitudine: row[10]
        }));
}
