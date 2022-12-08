import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/types/animal';
import { AnimalListService } from '../services/animal-list.service';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css']
})
export class ZooComponent implements OnInit {
  animalList: Animal[] = [];

  constructor(
    private animalListService : AnimalListService
  ) {}

  ngOnInit(): void {
    this.animalList = this.animalListService.getAnimals();
  }
}
