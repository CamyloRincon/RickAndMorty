import { Component } from '@angular/core';
import { SearchIcon } from 'primeng/icons/search';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rickandmorty-primeng';


  searchFilters(filters: any){

    console.log(filters);
  }
 
}

