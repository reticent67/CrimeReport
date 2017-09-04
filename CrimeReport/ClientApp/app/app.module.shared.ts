import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
//import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
//import { CounterComponent } from './components/counter/counter.component';

import { IntakeStartComponent } from './components/intake/intake.start.component';
import { IntakeMenuComponent } from './components/intake/intake.menu.component';
import { IntakeDetailsComponent } from './components/intake/intake.details.component';
import { IntakePeopleComponent } from './components/intake/intake.people.component';
import { AppRoutes } from "./app.routes";
import { ReportService } from "./services/ReportService";




@NgModule({
    declarations: [
        AppComponent,       
        HomeComponent,
        NavMenuComponent,
        IntakeStartComponent,
        IntakeMenuComponent,
        IntakeDetailsComponent,
        IntakePeopleComponent

    ],

    providers: [
        ReportService
    ],

    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutes
       
    ]
})
export class AppModuleShared {
}
