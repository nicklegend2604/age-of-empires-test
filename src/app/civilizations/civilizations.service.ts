import { Civilization } from './../models/civilization';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CivilizationsService {

  private baseUrl = environment.url;

  constructor(private http: HttpClient) { }

  getCivilizations(): Observable<Civilization[]> {
    const url = `${this.baseUrl}/civilizations`;
    return this.http.get(url).pipe(map((data: any) => data.civilizations));
  }
}
