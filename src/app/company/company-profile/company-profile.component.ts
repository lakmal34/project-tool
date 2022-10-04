import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {

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
