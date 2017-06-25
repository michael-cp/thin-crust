import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { UserAccountListComponent, UserAccountService } from './index';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule
    ],
    declarations: [
        UserAccountListComponent
    ],
    providers: [
        UserAccountService
    ]
})
export class UserAccountModule { }
