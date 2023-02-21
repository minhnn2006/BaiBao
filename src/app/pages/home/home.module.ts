import { Component, Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import {MatPaginatorModule, MatPaginatorIntl} from '@angular/material/paginator';
import {Subject} from 'rxjs';
@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatPaginatorModule,

  
  ]
})
export class HomeModule { }
