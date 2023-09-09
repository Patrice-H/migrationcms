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
import { TermOfUseComponent } from './pages/term-of-use/term-of-use.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { SecurityComponent } from './pages/security/security.component';
import { LogSignComponent } from './components/log-sign/log-sign.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MessageComponent } from './components/message/message.component';
import { HeaderComponent } from './components/header/header.component';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';
import { BlackWindowComponent } from './components/black-window/black-window.component';

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
    TermOfUseComponent,
    PrivacyComponent,
    SecurityComponent,
    LogSignComponent,
    LoginComponent,
    SignupComponent,
    MessageComponent,
    HeaderComponent,
    BurgerMenuComponent,
    BlackWindowComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MainMenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
