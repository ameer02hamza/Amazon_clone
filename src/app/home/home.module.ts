import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeadersComponent } from './headers/headers.component';
import {MatIconModule} from '@angular/material/icon'; 
import {MatSelectModule} from '@angular/material/select'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card'; 

@NgModule({
  declarations: [
    HomeComponent,
    HeadersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    NgbModule,
    MatCardModule
  ]
})
export class HomeModule { }
