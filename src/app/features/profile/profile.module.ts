import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PokemonInfoComponent],
  imports: [CommonModule, ProfileRoutingModule, SharedModule],
})
export class ProfileModule {}
