import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  items: MenuItem[];
  mobileItems: MenuItem[];
  status: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.status = false;  
    this.items = [
      {
        label: 'Company',
        icon:'pi pi-fw pi-th-large',
        items: [
            {
                label: 'Profile'
            },
            {
                label: 'Resources'
            }
        ]
      }
    ]
  }

}
