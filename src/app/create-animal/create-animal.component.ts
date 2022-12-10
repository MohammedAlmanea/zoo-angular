import { Component, EventEmitter, Output } from '@angular/core';
import { Animal } from 'src/types/animal';

@Component({
  selector: 'app-create-animal',
  templateUrl: './create-animal.component.html',
  styleUrls: ['./create-animal.component.css'],
})
export class CreateAnimalComponent {
  name: string = '';
  fed: boolean = false;

  @Output() addAnimal: EventEmitter<Animal> = new EventEmitter();

  constructor() {}

  submitForm() {
    const animal: Animal = {
      name: this.name,
      fed: this.fed,
      id: 0,
      info: 'no Info',
    };
    this.addAnimal.emit(animal);

    this.name = '';
    this.fed = false;
  }
}
