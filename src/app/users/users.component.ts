import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: {
    id: number;
    name: string;
    email: string;
  }[] = [];
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
