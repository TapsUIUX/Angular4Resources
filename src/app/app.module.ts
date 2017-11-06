import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//imports for Routing
import { RouterModule, Routes } from '@angular/router';

//imports for firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth' ;
import { environment } from '../environments/environment' ;


import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { Page404Component } from './components/page404/page404.component';
import { ClientService } from './services/client.service';
import { ClientTableComponent } from './components/dumb/client-table/client-table.component';
import { FormsModule } from '@angular/forms';
// import {FlashMessagesModule} from 'angular2-flash-messages';


//creat routing
const appRoutes:Routes = [
{path:'',component:DashboardComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'add-client',component:AddClientComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    Page404Component,
    ClientTableComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase,'clientpanel'),
    AngularFireAuthModule,
    FormsModule
    // FlashMessagesModule
  ],
  providers: [
    AngularFireDatabase,
    AngularFireDatabaseModule,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
