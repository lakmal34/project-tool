import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AvatarModule } from 'primeng/avatar';
import {BadgeModule} from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import {CheckboxModule} from 'primeng/checkbox';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {InplaceModule} from 'primeng/inplace';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {StyleClassModule} from 'primeng/styleclass';
import { ProductService } from './productservice';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'primeng/sidebar';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {EditorModule} from 'primeng/editor';
import { TagModule } from 'primeng/tag';
import {PickListModule} from 'primeng/picklist';
import {DragDropModule} from 'primeng/dragdrop';
import { PanelModule } from 'primeng/panel';
import {DataViewModule} from 'primeng/dataview';
import {CalendarModule} from 'primeng/calendar';
import {MultiSelectModule} from 'primeng/multiselect';
import {SelectButtonModule} from 'primeng/selectbutton';
import { PasswordModule } from "primeng/password";
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { RegisterComponent } from './authentication/register/register/register.component';
import { OnboardingComponent } from './authentication/register/onboarding/onboarding.component';
import { LoginComponent } from './authentication/login/login/login.component';
import { ForgotPasswordComponent } from './authentication/login/forgot-password/forgot-password.component';
import { VerifyPasswordComponent } from './authentication/login/verify-password/verify-password.component';
import { ResetPasswordComponent } from './authentication/login/reset-password/reset-password.component';
import { CompanyProfileComponent } from './company/company-profile/company-profile.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import { UserComponent } from './user/user/user.component';
import { ProjectProfileComponent } from './projects/project-profile/project-profile.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientProfileComponent } from './clients/client-profile/client-profile.component';
import { TopnavComponent } from './shared/topnav/topnav.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeProfileComponent } from './employees/employee-profile/employee-profile.component';
import { TemplateListComponent } from './templates/template-list/template-list.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';


@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    RegisterComponent,
    OnboardingComponent,
    LoginComponent,
    ForgotPasswordComponent,
    VerifyPasswordComponent,
    ResetPasswordComponent,
    CompanyProfileComponent,
    UserComponent,
    ProjectProfileComponent,
    ClientsComponent,
    ClientProfileComponent,
    TopnavComponent,
    SidemenuComponent,
    EmployeeListComponent,
    EmployeeProfileComponent,
    TemplateListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AvatarModule,
    BadgeModule,
    ButtonModule,
    TieredMenuModule,
    BrowserAnimationsModule,
    TabMenuModule,
    TabViewModule,
    CheckboxModule,
    FormsModule,
    InputTextModule,
    MenuModule,
    ToggleButtonModule,
    InplaceModule,
    ScrollPanelModule,
    TableModule,
    AccordionModule,
    InputTextareaModule,
    OverlayPanelModule,
    StyleClassModule,
    HttpClientModule,
    SidebarModule,
    DropdownModule,
    InputSwitchModule,
    EditorModule,
    TagModule,
    PickListModule,
    DragDropModule,
    PanelModule,
    DataViewModule,
    CalendarModule,
    MultiSelectModule,
    SelectButtonModule,
    PasswordModule,
    PanelMenuModule,
    BreadcrumbModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
