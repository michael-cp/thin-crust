import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent, ProductDetailComponent, ProductDetailGuard } from './product/index';
import { UserAccountListComponent } from './user-account/index';
import { DataTypesComponent } from './data-types/data-types.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/index';

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent,
        children: [
            { path: '', redirectTo: '', pathMatch: 'full' },
            { path: 'product', component: ProductComponent },
            { path: 'product/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },                    
            { path: 'data-types', component: DataTypesComponent },
            { path: 'user-account', component: UserAccountListComponent },
        ]
    },
    
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },

    { path: '**', redirectTo: '' }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
