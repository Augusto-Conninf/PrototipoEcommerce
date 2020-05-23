import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  {path: 'chat', component: ChatComponent},
  {path: '', component: LandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
