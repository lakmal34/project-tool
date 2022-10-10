import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Product } from '../../product';
import { ProductService } from '../../productservice';

interface CompanyProfile{
  text:string,
  secondary:string,
  value:string,
  icon:string,
  code:number
}

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {

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
      { text: 'Company Details', secondary:'General company details', value:'on', icon:'pi pi-fw pi-sliders-h', code:1 },
      { text: 'Company Resources', secondary:'Company resource files',value:'2', icon:'pi pi-fw pi-paperclip', code:2 }
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
