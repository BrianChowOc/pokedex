import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons!: Pokemon[];
  paginatedData: Pokemon[] = [];
  currentPage = 0;
  pageSize = 10;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons;
      this.currentPage = parseInt(this.route.snapshot.params['id']);
      this.updatePaginatedData();
    });
  }

  updatePaginatedData() {
    const startIndex = this.currentPage * this.pageSize + 1;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.pokemons.slice(startIndex, endIndex);
  }

  onPaginateChange(event: any) {
    this.currentPage = event.pageIndex;
    this.router.navigateByUrl(`/pokedex/${this.currentPage}`);
    this.updatePaginatedData();
  }
}
