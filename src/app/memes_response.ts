import { Meme } from "./meme";

export interface MemesResponse {
  success: boolean;
  data: MemeData
}

export interface MemeData {
  memes: Array<Meme>
}
