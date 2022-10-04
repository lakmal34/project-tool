import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  step1: boolean = true;
  step2: boolean = true;
  step3: boolean = true;
  step4: boolean = true;
  step5: boolean = true;
  step6: boolean = false;

  value3: any;
  companyType: any[];
  companySize: any[];
  companyDomain: any[];

  constructor(private primeNGConfig: PrimeNGConfig) {

    this.companyType = [
      { img: '../../../../assets/img/company-type-1.svg', imgActive: '../../../../assets/img/company-type-1-active.svg', text: ' Freelance' },
      { img: '../../../../assets/img/company-type-2.svg', imgActive: '../../../../assets/img/company-type-2-active.svg', text: 'Registered Company' }
    ];
    this.companySize = [
      { text: ' Startup' },
      { text: 'Small & Medium Enterprise' },
      { text: 'Large Enterprise' }
    ];
    this.companyDomain = [
      { text: ' Finance' },
      { text: 'Constructions' },
      { text: 'Human Resources' },
      { text: ' IT Support' },
      { text: ' Marketing' },
      { text: ' Operations' },
      { text: ' Software Development' },
      { text: ' Other' },
    ];
  }

  ngOnInit(): void {
  }

}
