import { Injectable } from '@nestjs/common';

export interface iSongs {
  id: number;
  title: string;
  duration: number;
  artist: string;
}
const songs: iSongs[] = [
  {
    id: 1,
    title: 'Bohemian Rhapsody',
    duration: 355,
    artist: 'Queen',
  },
  {
    id: 2,
    title: 'Imagine',
    duration: 180,
    artist: 'John Lennon',
  },
  {
    id: 3,
    title: 'Hotel California',
    duration: 400,
    artist: 'Eagles',
  },
  {
    id: 4,
    title: 'Smells Like Teen Spirit',
    duration: 290,
    artist: 'Nirvana',
  },
  {
    id: 5,
    title: 'Hey Jude',
    duration: 340,
    artist: 'The Beatles',
  },
  {
    id: 6,
    title: "Sweet Child o' Mine",
    duration: 325,
    artist: "Guns N' Roses",
  },
  {
    id: 7,
    title: 'Imagine Dragons',
    duration: 275,
    artist: 'Radioactive',
  },
  {
    id: 8,
    title: 'Thriller',
    duration: 420,
    artist: 'Michael Jackson',
  },
  {
    id: 9,
    title: 'Yesterday',
    duration: 180,
    artist: 'The Beatles',
  },
  {
    id: 10,
    title: 'Wonderwall',
    duration: 210,
    artist: 'Oasis',
  },
];

@Injectable()
export class AppService {
  getSongs(): iSongs[] {
    return songs;
  }
}
