import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from './app.router';
import { ProductModule } from './product/product.module';
import { UserAccountModule } from './user-account/user-account.module';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';

import { AuthenticationService } from './login/authentication.service';
import { AlertService } from './guards/alert.service';
import { AuthGuard } from './guards/index';
import { HomeComponent } from './home/home.component';
import { SideMenuComponent } from './side-menu/side-menu.component'; 
import { DataTypesComponent } from './data-types/data-types.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    ProductModule,
    UserAccountModule
  ],
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    SideMenuComponent,
    DataTypesComponent,
    CustomerComponent
  ],

  providers: [
    AuthenticationService,
    AuthGuard,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
