import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ManagerComponent } from './manager/manager.component';
import { FeaturesComponent } from './features/features.component';
import { FeaturesItensComponent } from './features-itens/features-itens.component';
import { DownloadComponent } from './download/download.component';
import { DownloadCardsComponent } from './download-cards/download-cards.component';
import { QuestionComponent } from './question/question.component';
import { EmailComponent } from './email/email.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ManagerComponent,
    FeaturesComponent,
    FeaturesItensComponent,
    DownloadComponent,
    DownloadCardsComponent,
    QuestionComponent,
    EmailComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
