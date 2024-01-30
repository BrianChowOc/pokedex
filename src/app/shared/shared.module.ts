import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PokemonService } from './services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { ColorTypeDirective } from './directives/type-color.directive';
@NgModule({
  declarations: [ColorTypeDirective],
  imports: [CommonModule],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ColorTypeDirective,
  ],
  providers: [PokemonService, MatPaginator],
})
export class SharedModule {}
