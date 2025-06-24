import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TheScienceComponent } from './components/the-science/the-science.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,

    TheScienceComponent,
    PortfolioComponent,
    OurTeamComponent,
    CareersComponent,
    ContactUsComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
