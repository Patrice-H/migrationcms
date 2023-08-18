import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ForumComponent } from './pages/forum/forum.component';
import { MessagingComponent } from './pages/messaging/messaging.component';
import { AccountComponent } from './pages/account/account.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { SecurityComponent } from './pages/security/security.component';
import { TermOfUseComponent } from './pages/term-of-use/term-of-use.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'docs', component: DocumentationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'messaging', component: MessagingComponent },
  { path: 'account', component: AccountComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'term-of-use', component: TermOfUseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
