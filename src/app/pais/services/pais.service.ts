import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiURL: string = 'https://restcountries.eu/rest/v2';
  get httpParams() {
    return new HttpParams()
      .set('fields', 'name;capital;alpha2Code;flag;population')

  }
  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${termino}`;

    return this.http.get<Country[]>(url, {params: this.httpParams });
    // .pipe(
    //   catchError(err => of([]))
    // );
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${termino}`;

    return this.http.get<Country[]>(url, {params: this.httpParams });
  }

  getPaisporCode(id: string): Observable<Country> {
    const url = `${this.apiURL}/alpha/${id}`;
    return this.http.get<Country>(url);
  }



  buscarRegion(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}/region/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams });
  }
}
