import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from 'src/app/shared/models/pokemon.model';

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${environment.apiUrl}`);
  }

  getPokemonById(id: string | null): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${environment.apiUrl}/${id}`);
  }
}
