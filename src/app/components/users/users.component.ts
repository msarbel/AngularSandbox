import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() { }

  ngOnInit() {
      this.users = [
        {
          firstName: 'John',
          age: 30,
          lastName: 'Doe',
          address: {
              street: '50 Main St',
              city: 'Boston',
              state: 'MA'
          },
          isActive: true,
          registered: new Date('01/02/2018 08:30:00')
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 24,
          address: {
              street: '23 School St',
              city: 'Boom',
              state: 'MA'
          },
          isActive: false,
          registered: new Date('03/11/2043 03:30:00')
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 43,
          address: {
              street: '54 Spruce St',
              city: 'Lousiville',
              state: 'KY'
          },
          isActive: true,
          registered: new Date('12/02/2015 10:30:00')
        }
        ];

        this.loaded = true;
     
  }

  addUser(user: User) {
    this.users.push(user);
  }


}
