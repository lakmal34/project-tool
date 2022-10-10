import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Projects',
        icon:'pi pi-fw pi-th-large',
        routerLink: '/projectlist',
        routerLinkActiveOptions:'active'
      },
      {
        label: 'Clients',
        icon:'pi pi-fw pi-users',
        routerLink: '/clientlist',
        routerLinkActiveOptions:'active'
      },
      {
        label: 'Employees',
        icon:'pi pi-fw pi-id-card',
        routerLink: '/employeelist',
        routerLinkActiveOptions:'active'
      },
      {
        label: 'Company',
        icon:'pi pi-fw pi-building',
        routerLink: '/companyprofile',
        routerLinkActiveOptions:'active'
      },
      {
        label: 'Templates',
        icon:'pi pi-fw pi-folder',
        routerLink: '/templatelist',
        routerLinkActiveOptions:'active'
      },
    ]
  }

}
