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

const routes: Routes = [
  { path:'projectlist', component: ProjectListComponent},
  { path: 'register', component:RegisterComponent},
  { path:'onboarding', component:OnboardingComponent},
  { path:'login', component:LoginComponent},
  { path:'forgotpassword', component:ForgotPasswordComponent},
  { path:'verifypassword', component:VerifyPasswordComponent},
  { path:'resetpassword', component:ResetPasswordComponent},
  { path:'companyprofile', component:CompanyProfileComponent},
  { path:'userprofile', component:UserComponent},
  { path:'projectProfile', component:ProjectProfileComponent},
  { path:'clientlist', component:ClientsComponent},
  { path:'clientProfile', component:ClientProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
