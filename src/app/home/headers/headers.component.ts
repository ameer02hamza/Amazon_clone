interface Animal {
  name: string;
  sound: string;
}
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  animalControl = new FormControl();
  selectFormControl = new FormControl();
  animals: Animal[] = [
    {name: 'All', sound: 'All!'},
    {name: 'Electronics', sound: 'Woof!'},
    {name: 'Pets', sound: 'Meow!'},
    {name: 'Clothes', sound: 'Moo!'},
    {name: 'Staionary', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];

}
