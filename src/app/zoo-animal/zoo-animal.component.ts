import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from 'src/types/animal';
import { LikedService } from '../services/liked.service';

@Component({
  selector: 'app-zoo-animal',
  templateUrl: './zoo-animal.component.html',
  styleUrls: ['./zoo-animal.component.css']
})
export class ZooAnimalComponent implements OnInit {
  @Input() animal:Animal;   

  constructor(private likedAnimals: LikedService) { 
    this.animal = {
      id: 1,
      name: '',
      fed: false,
      info: ''
    };
  }

  ngOnInit(): void {
  }

  addToLiked(animal:Animal) {
      this.likedAnimals.addToLikedAnimals(animal)
  }

}
