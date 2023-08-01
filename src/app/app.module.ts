import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ManagerComponent } from './manager/manager.component';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ManagerComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
