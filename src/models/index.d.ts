import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Song {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly difficulty: string;
  readonly band: string;
  readonly style?: string;
  constructor(init: ModelInit<Song>);
  static copyOf(source: Song, mutator: (draft: MutableModel<Song>) => MutableModel<Song> | void): Song;
}

export declare class SongRating {
  readonly id: string;
  readonly userId: string;
  readonly rating: number;
  constructor(init: ModelInit<SongRating>);
  static copyOf(source: SongRating, mutator: (draft: MutableModel<SongRating>) => MutableModel<SongRating> | void): SongRating;
}

export declare class SongSkipped {
  readonly id: string;
  readonly userId: string;
  constructor(init: ModelInit<SongSkipped>);
  static copyOf(source: SongSkipped, mutator: (draft: MutableModel<SongSkipped>) => MutableModel<SongSkipped> | void): SongSkipped;
}

export declare class User {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly songsSkipped?: SongSkipped[];
  readonly songsRating?: SongRating[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}