import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from 'src/app/components/item-card/item-card.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [ItemCardComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
  ],
  exports: [ItemCardComponent, MatButtonModule,MatToolbarModule,MatIconModule,MatCardModule,RouterModule,]
})
export class SharedModule { }
