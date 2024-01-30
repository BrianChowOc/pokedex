import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
})
export class PokemonItemComponent {
  @Input() pokemon!: Pokemon;
  constructor(private router: Router) {}
  onProfile() {
    this.router.navigateByUrl(`profile/${this.pokemon.pokedexId}`);
  }
}
