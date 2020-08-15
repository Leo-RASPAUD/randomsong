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