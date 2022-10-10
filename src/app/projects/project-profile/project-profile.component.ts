import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Product } from '../../product';
import { ProductService } from '../../productservice';

interface Client {
  name: string,
  code: string
}

interface ProjectStatus {
  name: string,
  code: string
}

interface ProjectProfile{
  text:string,
  secondary:string,
  value:string,
  icon:string,
  code:number
}

interface Employee {
  name: string,
  code:number
}

@Component({
  selector: 'app-project-profile',
  templateUrl: './project-profile.component.html',
  styleUrls: ['./project-profile.component.scss']
})

export class ProjectProfileComponent implements OnInit {

  items: MenuItem[];
  mobileItems: MenuItem[];
  status: boolean = false;
  value3: string = 'on';
  projectStatus: ProjectStatus[];
  clients: Client[];
  employees:Employee[];
  selectedClient: Client;
  projectProfile: ProjectProfile[];
  selectedProject: ProjectStatus;
  dateValue: Date;
  pDetails = true;
  pUsers = false;
  pTasks = false;
  pResources = false;
  selected:string;
  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;
  step4: boolean = false;
  step5: boolean = false;
  step6: boolean = false;
  product: Product[];
  selectedSite:Client[];
  selectedEmployee:Employee[];
  date1: Date;
  visibleSidebar2;
  visibleSidebar3;
  visibleSidebar4;

  constructor(private productService: ProductService) { 
    this.projectProfile = [
      { text: 'Project Details', secondary:'General project details', icon:'pi pi-fw pi-sliders-h', value:'on', code:1 },
      { text: 'Users', secondary:'General project details',icon:'pi pi-fw pi-user', value:'2', code:2 },
      { text: 'Assign Tasks ', secondary:'Assign tasks to project', icon:'pi pi-fw pi-list', value:'3', code:3 },
      { text: 'Task Board', secondary:'View project board', icon:'pi pi-fw pi-clone', value:'4', code:4 },
      { text: 'Resources', secondary:'Add project resources', icon:'pi pi-fw pi-paperclip', value:'5', code:5 }
    ];
    this.clients = [
      {name: 'Grady, Kuhic and Sauer', code: 'DL'},
      {name: 'Schimmel and Sons', code: 'SS'},
      {name: 'Runolfsson and Sons', code: 'RS'},
      {name: 'Cronin Inc', code: 'CI'},
      {name: 'Doyle and Sons', code: 'DS'}
    ];
    this.projectStatus = [
      {name: 'Preliminary', code: '1'},
      {name: 'New', code: '2'},
      {name: 'Inprogress', code: '3'},
      {name: 'Completed', code: '4'},
      {name: 'Archived', code: '5'}
    ];
    this.employees = [
      {name: 'Olive Yew', code: 1},
      {name: 'Allie Grater', code: 2},
      {name: 'Jack Aranda', code: 3},
      {name: 'Frank Stein', code: 4},
      {name: 'Peter Owt', code: 5}
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
      this.step4 = false;  
      this.step5 = true;  
    }

  };

  

}
