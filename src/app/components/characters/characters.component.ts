import { Component } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';



@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})



export class CharactersComponent {


  listCharacters: any[] = [];

  constructor(private _charactersService: CharactersService){}

  
  first: number = 0;
  page: number = 0;
  rows: number = 10;

  onPageChange(event: any) {

      this.first = event.first;
      this.rows = event.rows;
      this.page = event.page + 1;
      this.getCharacters(this.page);
      console.log(this.page);
  }

  ngOnInit(): void{
    this.getCharacters;
  }

  getCharacters(page: any){
    this._charactersService.getAll(page).subscribe(data =>{
      this.listCharacters = data.results;
      console.log(data);
    })
  }



}
