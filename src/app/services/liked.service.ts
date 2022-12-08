import { Injectable } from '@angular/core';
import { Animal } from 'src/types/animal';

@Injectable({
  providedIn: 'root',
})
export class LikedService {
  likedAnimals: Animal[];
  constructor() {
    this.likedAnimals = [
      {
        id: 0,
        name: '',
        fed: false,
        info: '',
      },
    ];
  }

  getLikedAnimals(): Animal[] {
    return this.likedAnimals;
  }

  addToLikedAnimals(animal: Animal):void {
    this.likedAnimals.push(animal);
    alert(`Liked '${animal.name}' Added to Liked animals list`);
  }

  clearLikedAnimals():void {
    this.likedAnimals= [] 
  }
}
