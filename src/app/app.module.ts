//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
//auth0
// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { HomeComponent } from './components/home/home.component';
import { CallbackComponent } from './components/callback/callback.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PreciosComponent,
    ProtegidaComponent,
    HomeComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot(
      {
       domain: 'dev-vicagent.eu.auth0.com',
       clientId: 'pr99yrtN6F7RmrWLc8xtekXJBltQFI3c'
     }
     )     ,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
