import { readFileSync } from 'fs';

export function readInput(path: string): string {
    return readFileSync(path, 'utf-8');
}
