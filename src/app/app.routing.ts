import { Routes } from '@angular/router';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryMaintainanceComponent } from './country-maintainance/country-maintainance.component';
import { SettingsComponent } from './settings/settings.component';
import { RegisterUserComponent } from '../fw/users/register-user/register-user.component';
import { AuthGuard } from './services/auth-guard.service';
import { SignInComponent } from '../fw/users/sign-in/sign-in.component';
export const appRoutes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegisterUserComponent},
  {
    path: 'authenticated', component: AuthenticatedUserComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '', canActivateChild: [AuthGuard],
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'country-list/:count', component: CountryListComponent },
          { path: 'country-detail/:country', component: CountryDetailComponent },
          { path: 'country-maint', component: CountryMaintainanceComponent },
          { path: 'settings', component: SettingsComponent },
        ]
      }
    ]
  },
  { path: '', component: SignInComponent },
  { path: '**', component: SignInComponent }
];
