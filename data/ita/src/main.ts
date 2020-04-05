import { join } from 'path';
import { readInput, parseInput, aggregateLocalities, writeOutput } from './utils';

const INPUT_PATH = join(__dirname, '..', 'raw_input.txt');
const OUTPUT_PATH = join(__dirname, '..', 'ita_geocoding.csv');

function main(): void {
    const input = readInput(INPUT_PATH);
    let localities = parseInput(input);
    localities = aggregateLocalities(localities);
    writeOutput(OUTPUT_PATH, localities);
}
main();