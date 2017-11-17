import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
<<<<<<< HEAD


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
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {MATERIAL_COMPATIBILITY_MODE} from '@angular/material';
import { AppRoutes } from './app.routes';

import { AppComponent } from './components/app/app.component';
import { MainMenuComponent } from './components/mainmenu/mainmenu.component';
import { NewCRStartComponent } from './components/newCrimeReport/newCR.start.component';
import { NewCRProgBarComponent } from './components/newCrimeReport/newCR.progBar.component';
import { NewCRDetailsComponent } from './components/newCrimeReport/newCR.details.component';
import { NewCRPeopleComponent } from './components/newCrimeReport/newCR.people.component';
import { PersonRoleDialog  } from "./models/reportDialogs.model";

>>>>>>> 623772e936b3624aee186f0780a88f06844d2589




@NgModule({
<<<<<<< HEAD
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
=======
    providers:[
        {provide: MATERIAL_COMPATIBILITY_MODE, useValue: true}
    ],
    
    declarations: [
        AppComponent,
        MainMenuComponent,
        NewCRStartComponent,
        NewCRProgBarComponent,
        NewCRDetailsComponent,
        NewCRPeopleComponent,  
        PersonRoleDialog    
        
    ],
    entryComponents: [
        PersonRoleDialog
>>>>>>> 623772e936b3624aee186f0780a88f06844d2589
    ],

    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
<<<<<<< HEAD
        AppRoutes
       
    ]
=======
        BrowserAnimationsModule, 
        MaterialModule,
        AppRoutes
    ]

>>>>>>> 623772e936b3624aee186f0780a88f06844d2589
})
export class AppModuleShared {
}
