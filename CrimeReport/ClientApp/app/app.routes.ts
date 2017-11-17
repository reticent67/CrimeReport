import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { HomeComponent } from './components/home/home.component';


import { IntakeStartComponent } from './components/intake/intake.start.component';
import { IntakeDetailsComponent } from './components/intake/intake.details.component';
import { IntakePeopleComponent } from './components/intake/intake.people.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'intake', component: IntakeStartComponent,
        children: [
            { path: '', redirectTo: 'intake-details', pathMatch: 'full' },
            { path: 'intake-details', component: IntakeDetailsComponent },
            { path: 'intake-people', component: IntakePeopleComponent   }
        ]
    },
            {path: '**', redirectTo: 'home'}
=======
import { MainMenuComponent } from './components/mainmenu/mainmenu.component';
import { NewCRStartComponent } from './components/newCrimeReport/newCR.start.component';
import { NewCRDetailsComponent } from './components/newCrimeReport/newCR.details.component';
import { NewCRPeopleComponent } from './components/newCrimeReport/newCR.people.component';


export const routes: Routes = [
    { path: 'main-menu', component: MainMenuComponent },
    {
        path: 'newCR-start', component: NewCRStartComponent,
        children: [
           { path: '', redirectTo: 'newCR-details', pathMatch: 'full' },
           { path: 'newCR-details', component: NewCRDetailsComponent },
           { path: 'newCR-people', component: NewCRPeopleComponent },
       ]
    },
    {path: '**', redirectTo: 'main-menu'}
>>>>>>> 623772e936b3624aee186f0780a88f06844d2589
  
];

export const AppRoutes = RouterModule.forRoot(routes);