import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './components/mainmenu/mainmenu.component';
import { NewCRStartComponent } from './components/newCrimeReport/newCR.start.component';
import { NewCRDetailsComponent } from './components/newCrimeReport/newCR.details.component';
//import { IntakePeopleComponent } from './components/intake/intake.people.component';


export const routes: Routes = [
    { path: 'main-menu', component: MainMenuComponent },
    {
        path: 'newCR-start', component: NewCRStartComponent,
        children: [
           { path: '', redirectTo: 'newCR-details', pathMatch: 'full' },
           { path: 'newCR-details', component: NewCRDetailsComponent },
    //        { path: 'intake-people', component: IntakePeopleComponent },
       ]
    },
    {path: '**', redirectTo: 'main-menu'}
  
];

export const AppRoutes = RouterModule.forRoot(routes);