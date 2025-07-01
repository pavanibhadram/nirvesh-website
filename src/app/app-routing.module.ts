import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TheScienceComponent } from './components/the-science/the-science.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { FunctionalMagneticComponent } from './components/functional-magnetic/functional-magnetic.component';
import { PrevalenceComponent } from './components/prevalence/prevalence.component';
import { StrokeRehabilitationComponent } from './components/stroke-rehabilitation/stroke-rehabilitation.component';
import { EpidemiologyComponent } from './components/epidemiology/epidemiology.component';
import { MusicTherapyComponent } from './components/music-therapy/music-therapy.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'the-science', component: TheScienceComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'our-team', component: OurTeamComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'functional-magnetic', component: FunctionalMagneticComponent },
  { path: 'prevalence', component: PrevalenceComponent },
  { path: 'stroke-rehabilitation', component: StrokeRehabilitationComponent },
  { path: 'epidemiology', component: EpidemiologyComponent },
  { path: 'music-therapy', component: MusicTherapyComponent },
  {
    path: 'why-us',
    loadChildren: () =>
      import('./components/routing/whu-us.routes').then(
        (m) => m.WhyUsComponentRoutes
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
