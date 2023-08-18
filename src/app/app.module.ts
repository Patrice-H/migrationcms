import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MainMenuModule } from './components/main-menu/main-menu.module';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { ForumComponent } from './pages/forum/forum.component';
import { AccountComponent } from './pages/account/account.component';
import { MessagingComponent } from './pages/messaging/messaging.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    DocumentationComponent,
    ForumComponent,
    AccountComponent,
    MessagingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MainMenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
