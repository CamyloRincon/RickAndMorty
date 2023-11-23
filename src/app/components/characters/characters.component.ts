import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { filter, shareReplay } from 'rxjs';
import { CharactersService } from 'src/app/services/characters.service';



@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})



export class CharactersComponent {

  @Output() selectedFilters = new EventEmitter<any>();


  //List variables
  Name: string | undefined;
  status: any;
  gender: any;

  //List arrays
  listCharacters: any[] = [];
  statusList: any[] = [];
  genderList: any[] = [];
 

  constructor(private _charactersService: CharactersService) {

    this.statusList = [
      { name: 'Alive' },
      { name: 'Dead' },
      { name: 'Unknow' }
    ];

    this.genderList = [
      { name: 'female' },
      { name: 'male' },
      { name: 'genderless' },
      { name: 'unknown' }
    ];
  }


  search() {
    const FILTERS = {
      name: this.Name,
      status: this.status,
      gender: this.gender
    }
    console.log(FILTERS);
    this.selectedFilters.emit(FILTERS);
  }


  first: number = 0;
  page: number = 0;
  rows: number = 10;

  onPageChange(event: any) {

    this.first = event.first;
    this.rows = event.rows;
    this.page = event.page + 1;
    console.log(this.page);

  }



  ngOnInit(): void {}

}
