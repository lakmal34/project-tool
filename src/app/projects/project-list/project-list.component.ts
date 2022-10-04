import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Product } from '../../product';
import { ProductService } from '../../productservice';

interface clients {
  name: string,
  short: string,
  code: boolean
}

interface progress {
  name: string,
  code: boolean
}

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  items: MenuItem[];
  mobileItems: MenuItem[];
  product: Product[];
  status: boolean = false;
  clients: clients[];
  progress: progress[];

  constructor(private productService: ProductService) {
    this.clients = [
      {name: 'All Clients', short: 'All', code: false},
      {name: 'Dialog', short: 'DL', code: true},
    ];
    this.progress = [
      {name: 'All Status', code: true},
      {name: 'Active', code: false}
    ];
  }

  ngOnInit(): void {
    this.productService.getProducts().then(data => this.product = data);
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
