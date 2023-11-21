import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { filter, shareReplay } from 'rxjs';
import { CharactersService } from 'src/app/services/characters.service';



@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})



export class CharactersComponent {




  listCharacters: any[] = [];
  Name: string | undefined;
  Status: any[] = [];
  status: any;
  Gender: any[] = [];
  gender: any;

  constructor(private _charactersService: CharactersService) {

    this.Status = [
      { name: 'Alive' },
      { name: 'Dead' },
      { name: 'Unknow' }
    ];

    this.Gender = [
      { name: 'female' },
      { name: 'male' },
      { name: 'genderless' },
      { name: 'unknown' }
    ];

  }


  search(){
    const FILTERS = {
      name: this.Name,
      status: this.status,
      gender: this.gender
    }
    console.log(FILTERS);
  }


  first: number = 0;
  page: number = 0;
  rows: number = 10;

  onPageChange(event: any) {

    this.first = event.first;
    this.rows = event.rows;
    this.page = event.page + 1;
    console.log(this.page);
    this.getCharacters(this.page);

  }



  ngOnInit(): void {
    /*this._charactersService.getAllCharacters().subscribe(data => {
      this.listCharacters = data.results;
      
    })*/
    
  }

  getCharacters(page: any) {
    this._charactersService.getAll(page).subscribe(data => {
      this.listCharacters = data.results;
      /*this.listCharacters.forEach(e => {
       this.listAllName.push(e.name);
       return this.listAllName;
      });*/

      console.log(this.listCharacters);

    });

  }



}
