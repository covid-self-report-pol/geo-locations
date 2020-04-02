import { writeFileSync } from 'fs';
import { Locality } from '../types';

export function writeOutput(path: string, localities: Locality[]): void {
    const header = ['country_code', 'postal_code', 'latitude', 'longitude', 'region_id'];
    const rows = localities.map(locality => [
        locality.nazione,
        locality.cap,
        locality.latitudine,
        locality.longitudine,
        `${locality.regione}::${locality.provincia}::${locality.comuni.join('||')}`
    ]);

    const text = [header, ...rows]
        .map(columns => columns.join(','))
        .join('\n');

    writeFileSync(path, text);
}
