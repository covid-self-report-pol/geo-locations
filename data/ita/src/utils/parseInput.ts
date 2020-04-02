import { Locality } from '../types';

function fixRegione(regione: string): string {
    return (regione === 'Abruzzi' ? 'Abruzzo' : regione);
}

export function parseInput(input: string): Locality[] {
    return input
        .split('\n')
        .map(row => row
            .split('\t')
            .filter(word => !!word)
        )
        .map(row => ({
            nazione: 'ITA',
            cap: row[1],
            comuni: [row[2]],
            provincia: row[5],
            regione: fixRegione(row[3]),
            latitudine: row[row.length === 10 ? 7 : 9],
            longitudine: row[row.length === 10 ? 8 : 10]
        }));
}
