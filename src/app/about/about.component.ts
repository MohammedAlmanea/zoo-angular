import { Component } from '@angular/core';
import { Animal } from 'src/types/animal';
import { AnimalListService } from '../services/animal-list.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  animalsList: Animal[] = [];

  constructor( private animalListService: AnimalListService) {}

  ngOnInit(): void {
    this.animalsList = this.animalListService.getAnimals()
   }
  }
