import { Injectable } from '@nestjs/common';

export interface iSongs {
  id: number;
  title: string;
  duration: number;
  artist: string;
}

import { songs } from './data/data';
console.log(songs);

@Injectable()
export class AppService {
  getSongs(): iSongs[] {
    return songs;
  }
  pepoteSaysHello(): string {
    return 'Hola soy pepotex';
  }
}
