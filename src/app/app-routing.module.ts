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

const routes: Routes = [
  { path:'projectlist', component: ProjectListComponent},
  { path: 'register', component:RegisterComponent},
  { path:'onboarding', component:OnboardingComponent},
  { path:'login', component:LoginComponent},
  { path:'forgotPassword', component:ForgotPasswordComponent},
  { path:'verifyPassword', component:VerifyPasswordComponent},
  { path:'resetPassword', component:ResetPasswordComponent},
  { path:'companyProfile', component:CompanyProfileComponent},
  { path:'users', component:UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
