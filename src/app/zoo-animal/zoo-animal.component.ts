import { Component, OnInit, Input } from '@angular/core';
import { animal } from 'src/types/animal';

@Component({
  selector: 'app-zoo-animal',
  templateUrl: './zoo-animal.component.html',
  styleUrls: ['./zoo-animal.component.css']
})
export class ZooAnimalComponent implements OnInit {
  @Input() animal:animal;

  constructor() { 
    this.animal = {
      id: 1,
      name: '',
      fed: false
    };
  }

  ngOnInit(): void {
  }

}
