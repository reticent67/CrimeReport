import { Routes, RouterModule } from '@angular/router';
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
  
];

export const AppRoutes = RouterModule.forRoot(routes);