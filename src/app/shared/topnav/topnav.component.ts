import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})



export class TopnavComponent implements OnInit {
  
  menuItems: MenuItem[];
  home: MenuItem;
 
  constructor(private router: ActivatedRoute) {
  }
  
  ngOnInit(): void {
    const myData = this.router.snapshot.data['breadcrumb'];
    console.log(myData);
    this.home = {label: myData};
  }


}
