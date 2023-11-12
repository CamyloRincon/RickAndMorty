import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private URL = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}


  getAll(page: any): Observable<any>{
    return this.http.get<any>(this.URL + '/character/?page=' + page);
  }
}
