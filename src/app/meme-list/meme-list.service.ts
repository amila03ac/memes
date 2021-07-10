import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MemesResponse } from '../memes_response';

@Injectable({
  providedIn: 'root'
})
export class MemeListService {

  PATH = 'https://api.imgflip.com/get_memes';

  constructor(private http: HttpClient) { }

  async getMemes() {
    const res = await this.http.get<MemesResponse>(this.PATH).toPromise();
    return res.success ? res.data.memes : [];
  }
}
