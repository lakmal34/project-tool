import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectListComponent} from '../app/projects/project-list/project-list.component';
import {RegisterComponent} from '../app/authentication/register/register/register.component';
import {OnboardingComponent} from '../app/authentication/register/onboarding/onboarding.component';
import {LoginComponent} from '../app/authentication/login/login/login.component';
import { ForgotPasswordComponent } from './authentication/login/forgot-password/forgot-password.component';
import { VerifyPasswordComponent } from './authentication/login/verify-password/verify-password.component';
import { ResetPasswordComponent } from './authentication/login/reset-password/reset-password.component';
import { CompanyProfileComponent } from './company/company-profile/company-profile.component';
import { UserComponent } from './user/user/user.component';
import { ProjectProfileComponent } from './projects/project-profile/project-profile.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientProfileComponent } from './clients/client-profile/client-profile.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeProfileComponent } from './employees/employee-profile/employee-profile.component';
import { TemplateListComponent } from './templates/template-list/template-list.component';

const routes: Routes = [
  { 
    path:'', 
    redirectTo: '/projectlist', 
    pathMatch: 'full',
    data: {
      breadcrumb: 'Projects'
    },
  },
  { path:'projectlist',
    component: ProjectListComponent,
    data: {
      breadcrumb: 'Projects'
    },
  },
  { path: 'register',
    component:RegisterComponent,
    data: {
      breadcrumb: 'register'
    },
  },
  { path:'onboarding',
    component:OnboardingComponent,
    data: {
      breadcrumb: 'onboarding'
    },
  },
  { path:'login',
    component:LoginComponent,
    data: {
      breadcrumb: 'login'
    },
  },
  { 
    path:'forgotpassword', 
    component:ForgotPasswordComponent,
    data: {
      breadcrumb: 'forgotpassword'
    },
  },
  { path:'verifypassword', 
    component:VerifyPasswordComponent,
    data: {
      breadcrumb: 'verifypassword'
    },
  },
  { path:'resetpassword', 
    component:ResetPasswordComponent,
    data: {
      breadcrumb: 'resetpassword'
    },
  },
  { path:'companyprofile', 
    component:CompanyProfileComponent,
    data: {
      breadcrumb: 'Company'
    },
  },
  { path:'userprofile', 
    component:UserComponent,
    data: {
      breadcrumb: 'My Profile'
    },
  },
  { path:'projectProfile', 
    component:ProjectProfileComponent,
    data: {
      breadcrumb: 'Project Profile'
    },
  },
  { path:'clientlist', 
    component:ClientsComponent,
    data: {
      breadcrumb: 'Clients'
    },
  },
  { path:'clientProfile', 
    component:ClientProfileComponent,
    data: {
      breadcrumb: 'clientProfile'
    },
  },
  { path:'employeelist', 
    component:EmployeeListComponent,
    data: {
      breadcrumb: 'Employees'
    },
  },
  { path:'employeeprofile', 
    component:EmployeeProfileComponent,
    data: {
      breadcrumb: 'Employee Profile'
    },
  },
  { path:'templatelist', 
    component:TemplateListComponent,
    data: {
      breadcrumb: 'Templates'
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
