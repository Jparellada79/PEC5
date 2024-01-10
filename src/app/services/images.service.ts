import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comic ,ComicResponse} from '../models/image.interface';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private apiUrl = 'https://gateway.marvel.com/v1/public/comics';
  private publicKey = '83d31c601d27587f17af310733edac5b';

  
  constructor(
    private http:HttpClient
  ) { }

 

  getAllComics() :Observable<ComicResponse>{
    const ts = '1704723460073'
    const hash = '534162fb387f88fdbd580907b5e78fb7'

    const params = {
      apikey: this.publicKey,
      ts: ts,
      hash: hash
    };
    return this.http.get<any>(this.apiUrl, { params: params });
  }

  getComicById(id: string) :Observable<ComicResponse>{
    const ts = '1704723460073'
    const hash = '534162fb387f88fdbd580907b5e78fb7'

    const params = {
      apikey: this.publicKey,
      ts: ts,
      hash: hash
    };
    return this.http.get<ComicResponse>(this.apiUrl+'/'+id, { params: params });
  }

}

