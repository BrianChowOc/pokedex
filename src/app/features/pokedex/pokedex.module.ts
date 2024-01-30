import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PokemonItemComponent, PokemonListComponent],
  imports: [CommonModule, PokedexRoutingModule, SharedModule],
})
export class PokedexModule {}
