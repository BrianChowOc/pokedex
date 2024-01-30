import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss'],
})
export class PokemonInfoComponent implements OnInit {
  pokemon!: Pokemon;
  infoUrl!: string;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.pokemonService
      .getPokemonById(this.route.snapshot.params['id'])
      .subscribe((pokemon) => {
        this.pokemon = pokemon;
        this.initIndexPokedex();
      });
  }

  initIndexPokedex() {
    let id = parseInt(this.route.snapshot.params['id']);
    if (id % 10 === 0 && id >= 10 && id <= 100) {
      id -= 1;
    }
    id = Math.floor(id / 10);
    this.infoUrl = `/pokedex/${id}`;
  }
}
