import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { shareReplay } from 'rxjs';
import { CharactersService } from 'src/app/services/characters.service';



@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})



export class CharactersComponent {

  

  listCharacters1: any[] = [];
  listCharacters: any[] = [];
  listAllName: any[] = [];
  Status: any[] = [];

  constructor(private _charactersService: CharactersService) {

    this.Status = [
      { name: 'Alive'},
      { name: 'Dead'},
      { name: 'Unknow'}
  ];

   }



  first: number = 0;
  page: number = 0 ;
  rows: number = 10;



  onPageChange(event: any) {

    this.first = event.first;
    this.rows = event.rows; 
    this.page = event.page + 1;
    console.log(this.page);
    this.getCharacters(this.page);

  }

  searchFilters = new FormGroup ({
    status: new FormControl(''),
    gender: new FormControl('')
  })


  ngOnInit(): void {
    /*this._charactersService.getAllCharacters().subscribe(data => {
      this.listCharacters = data.results;
      
    })*/
  }

  getCharacters(page: any) {
   this._charactersService.getAll(page).subscribe(data =>{
      this.listCharacters = data.results;
     /*this.listCharacters.forEach(e => {
      this.listAllName.push(e.name);
      return this.listAllName;
     });*/
   
      console.log(this.listCharacters);
      
    });

  }



}
