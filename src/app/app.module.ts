import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FwModule } from '../fw/fw.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { appRoutes } from './app.routing';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryMaintainanceComponent } from './country-maintainance/country-maintainance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { UserService } from './services/user.services';
import { UserApi } from '../fw/users/user-api';
import { AuthGuard } from './services/auth-guard.service';
import { AppDataService } from './services/app-data.service';
import { CountryPanelComponent } from './panels/country-panel/country-panel.component';
import { ImagePanelComponent } from './panels/image-panel/image-panel.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CountryDetailComponent,
    CountryListComponent,
    CountryMaintainanceComponent,
    SettingsComponent,
    AuthenticatedUserComponent,
    ImagePanelComponent,
    CountryPanelComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppDataService,
    UserService,
    AuthGuard,
    { provide: UserApi, useExisting: UserService }],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
