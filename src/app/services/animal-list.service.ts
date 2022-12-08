import { Injectable } from '@angular/core';
import { Animal } from 'src/types/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalListService {

  constructor() { }

  getAnimals(): Animal[] {
    return  [
      {
        id: 1,
        name: 'Panda',
        fed: true,
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis pellentesque nisl, et blandit magna pellentesque eu. Duis sed eros dapibus, molestie magna id, rhoncus massa. Duis nec elementum libero. Nullam auctor, urna tempor luctus vestibulum, nulla ante rhoncus risus, eu pretium purus dolor eu risus. Fusce eu augue justo.'
      },
      {
        id: 2,
        name: 'Elephant',
        fed: true,
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis pellentesque nisl, et blandit magna pellentesque eu. Duis sed eros dapibus, molestie magna id, rhoncus massa. Duis nec elementum libero. Nullam auctor, urna tempor luctus vestibulum, nulla ante rhoncus risus, eu pretium purus dolor eu risus. Fusce eu augue justo.'
      },
      {
        id: 3,
        name: 'Lion',
        fed: false,
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis pellentesque nisl, et blandit magna pellentesque eu. Duis sed eros dapibus, molestie magna id, rhoncus massa. Duis nec elementum libero. Nullam auctor, urna tempor luctus vestibulum, nulla ante rhoncus risus, eu pretium purus dolor eu risus. Fusce eu augue justo.'
      }
    ]
  }
}
