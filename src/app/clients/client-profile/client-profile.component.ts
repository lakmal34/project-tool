import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Product } from '../../product';
import { ProductService } from '../../productservice';

interface CompanyProfile{
  text:string,
  secondary:string,
  value:string,
  code:number
}


@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {

  items: MenuItem[];
  mobileItems: MenuItem[];
  status: boolean = false;
  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;
  step4: boolean = false;
  step5: boolean = false;
  step6: boolean = false;
  value3: string = 'on';
  companyProfile: CompanyProfile[];
  product: Product[];

  constructor(private productService: ProductService) {
    this.companyProfile = [
      { text: 'Client Details', secondary:'General client details', value:'on', code:1 },
      { text: 'Client Users', secondary:'Client users',value:'2', code:2 }
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

  frqToggle = function (obj:any) {
    this.selected = obj.value;
    console.log(this.selected);

    if (this.selected == "on"){
      console.log('1 selected');
      this.step1 = true; 
      this.step2 = false;  
      this.step3 = false; 
      this.step4 = false;  
      this.step5 = false;    
      
    }
    else if (this.selected == "2") {
      this.step1 = false; 
      this.step2 = true;  
      this.step3 = false; 
      this.step4 = false; 
      this.step5 = false;  
    }
    else if (this.selected == "3") {
      this.step1 = false; 
      this.step2 = false;  
      this.step3 = true; 
      this.step4 = false; 
      this.step5 = false;  
    }
    else if (this.selected == "4") {
      this.step1 = false; 
      this.step2 = false;  
      this.step3 = false; 
      this.step4 = true; 
      this.step5 = false;   
    }
    else if (this.selected == "5") {
      this.step1 = false; 
      this.step2 = false;  
      this.step3 = false; 
      this.step4 = true;  
      this.step5 = false;  
    }

  };

}
