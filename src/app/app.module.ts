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
import { OurVisionComponent } from './components/our-vision/our-vision.component';
import { ValuesComponent } from './components/values/values.component';
import { ProductComponent } from './components/product/product.component';
import { OutLookComponent } from './components/out-look/out-look.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { FunctionalMagneticComponent } from './components/functional-magnetic/functional-magnetic.component';
import { PrevalenceComponent } from './components/prevalence/prevalence.component';
import { StrokeRehabilitationComponent } from './components/stroke-rehabilitation/stroke-rehabilitation.component';
import { EpidemiologyComponent } from './components/epidemiology/epidemiology.component';
import { MusicTherapyComponent } from './components/music-therapy/music-therapy.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PortfolioComponent,
    OurTeamComponent,
    CareersComponent,
    ContactUsComponent,

    IntroductionComponent,
    FunctionalMagneticComponent,
    PrevalenceComponent,
    StrokeRehabilitationComponent,
    EpidemiologyComponent,
    MusicTherapyComponent,
    PrivacyPolicyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ChatbotComponent],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
