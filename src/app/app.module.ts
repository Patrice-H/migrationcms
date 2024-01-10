import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
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
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';
import { BlackWindowComponent } from './components/black-window/black-window.component';
import { HomeFormComponent } from './components/home-form/home-form.component';
import { SelectCmsComponent } from './components/select-cms/select-cms.component';
import { CmsPanelComponent } from './components/cms-panel/cms-panel.component';
import { CmsLabelComponent } from './components/cms-label/cms-label.component';
import { UnderConstructComponent } from './components/under-construct/under-construct.component';
import { ConnectFormComponent } from './components/connect-form/connect-form.component';
import { MigrationFormComponent } from './components/migration-form/migration-form.component';
import { TreeElementComponent } from './components/tree-element/tree-element.component';
import { TreeBlockComponent } from './components/tree-block/tree-block.component';
import { TreeComponent } from './components/tree/tree.component';

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
    MainMenuComponent,
    BurgerMenuComponent,
    BlackWindowComponent,
    HomeFormComponent,
    SelectCmsComponent,
    CmsPanelComponent,
    CmsLabelComponent,
    UnderConstructComponent,
    ConnectFormComponent,
    MigrationFormComponent,
    TreeElementComponent,
    TreeBlockComponent,
    TreeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
