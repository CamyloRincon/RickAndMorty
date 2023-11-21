import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './components/characters/characters.component';

//imports prime ng
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    ListCharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CardModule,
    PaginatorModule,
    InputTextModule,
    ButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
