import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TheScienceComponent } from './components/the-science/the-science.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'the-science', component: TheScienceComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'our-team', component: OurTeamComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
