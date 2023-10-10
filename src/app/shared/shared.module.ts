import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertToSpacePipe } from './convert-to-spaces-pipe';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConvertToSpacePipe,
    StarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    CommonModule,
    StarComponent,
    ConvertToSpacePipe
  ]
})
export class SharedModule { }
