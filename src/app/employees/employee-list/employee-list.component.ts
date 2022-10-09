import { Component, OnInit } from '@angular/core';
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
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  product: Product[];
  status: boolean = false;
  clients: clients[];
  progress: progress[];
  visibleSidebar2;
  selectedSite:clients[];
  date1: Date;
  companyClients: any[];

  constructor(private productService: ProductService) {
    this.clients = [
      {name: 'All Projects', short: 'All', code: false},
      {name: 'Dialog', short: 'DL', code: true},
    ];
    this.progress = [
      {name: 'All Status', code: true},
      {name: 'Active', code: false}
    ];
  }

  ngOnInit(): void {
    this.productService.getProducts().then(data => this.product = data);
  }

}
