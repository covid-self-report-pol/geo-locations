import { Locality, Coordinates } from '../types';

function aggregateComuni(...localities: Locality[]): string[] {
    return localities.reduce((acc, curr) => [...acc, ...curr.comuni], []);
}

function aggregateCoordinates(...coords: Coordinates[]): Coordinates {
    let x = 0, y = 0, z = 0;

    for (let coord of coords) {
        let latitude = +coord.latitudine * Math.PI / 180;
        let longitude = +coord.longitudine * Math.PI / 180;

        x += Math.cos(latitude) * Math.cos(longitude);
        y += Math.cos(latitude) * Math.sin(longitude);
        z += Math.sin(latitude);
    }
    
    let total = coords.length;
    x = x / total;
    y = y / total;
    z = z / total;

    let centralLongitude = Math.atan2(y, x);
    let centralSquareRoot = Math.sqrt(x * x + y * y);
    let centralLatitude = Math.atan2(z, centralSquareRoot);

    return {
        latitudine: (centralLatitude * 180 / Math.PI).toFixed(4),
        longitudine: (centralLongitude * 180 / Math.PI).toFixed(4)
    };
}

function aggregate(...localities: Locality[]): Locality {
    return {
        nazione: localities[0].nazione,
        cap: localities[0].cap,
        comuni: aggregateComuni(...localities),
        provincia: localities[0].provincia,
        regione: localities[0].regione,
        ...aggregateCoordinates(...localities)
    };
}

export function aggregateLocalities(localities: Locality[]): Locality[] {
    const result: Locality[] = [];

    localities.sort((x, y) => (+x.cap) - (+y.cap));

    for (let i = 0; i < localities.length; i++) {
        const currentCAP = localities[i].cap;
        const sameCAP: Locality[] = [];
        
        for (let j = i; j < localities.length && localities[j].cap === currentCAP; j++) {
            sameCAP.push(localities[j]);
        }

        result.push(aggregate(...sameCAP));
        i += sameCAP.length - 1;
    }

    return result;
}