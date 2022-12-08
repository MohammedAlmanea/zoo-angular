import { Component } from '@angular/core';
import { Animal } from 'src/types/animal';
import { LikedService } from '../services/liked.service';

@Component({
  selector: 'app-liked-page',
  templateUrl: './liked-page.component.html',
  styleUrls: ['./liked-page.component.css']
})
export class LikedPageComponent {
  likedAnimals: Animal[] = [];
  
  constructor( private likedService: LikedService) {}

  ngOnInit(): void {
    this.likedAnimals = this.likedService.getLikedAnimals();
  }
}
