import { Component, OnInit } from '@angular/core';
import { animal } from 'src/types/animal';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css']
})
export class ZooComponent implements OnInit {
  animalList: animal[] = [];

  constructor() { }

  ngOnInit(): void {
    this.animalList = [
      {
        id: 1,
        name: 'Panda',
        fed: true
      },
      {
        id: 2,
        name: 'Elephant',
        fed: true
      },
      {
        id: 3,
        name: 'Lion',
        fed: false
      }
    ]
  }

}
