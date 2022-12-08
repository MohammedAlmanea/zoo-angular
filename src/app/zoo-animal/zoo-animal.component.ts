import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { animal } from 'src/types/animal';

@Component({
  selector: 'app-zoo-animal',
  templateUrl: './zoo-animal.component.html',
  styleUrls: ['./zoo-animal.component.css']
})
export class ZooAnimalComponent implements OnInit {
  @Input() animal:animal;
  @Output() liked = new EventEmitter();   

  constructor() { 
    this.animal = {
      id: 1,
      name: '',
      fed: false,
      info: ''
    };
  }

  ngOnInit(): void {
  }

}
