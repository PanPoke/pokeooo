import fs from 'fs'; // 修正
import path from 'path';
import csv from 'csv-parser';

interface Pokemon {
  ID: number;
  Name: string;
  Type: string;
  HP: number;
  Attack: number;
  Defense: number;
  SpAtk: number;
  SpDef: number;
  Speed: number;
}

export const getPokemonData = async (): Promise<Pokemon[]> => {
  const pokemonData: Pokemon[] = [];
  const filePath = path.resolve('./static/pokemon_data.csv');

  return new Promise((resolve, reject) => {
    const results: Pokemon[] = [];

    const stream = fs.createReadStream(filePath); // 修正
    stream
      .pipe(csv())
      .on('data', (data: any) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (err: Error) => reject(err));
  });
};