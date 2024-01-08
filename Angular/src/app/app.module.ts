import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './@shared/components/login/login.component';
import { LogoutComponent } from './@shared/components/logout/logout.component';
import { RegisterComponent } from './@shared/components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './@shared/components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RankingsComponent } from './components/rankings/rankings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './@shared/modules/angular-material/angular-material.module';
import { HeroComponent } from './components/hero/hero.component';
import { ITComponent } from './components/it/it.component';
import { BioComponent } from './components/bio/bio.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { GridlistComponent } from './components/gridlist/gridlist.component';
import { FooterComponent } from './@shared/components/footer/footer.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { GameroomComponent } from './components/gameroom/gameroom.component';
import { InterfaceUserAccountComponent } from './components/interface-user-account/interface-user-account.component';
import { TimerComponent } from './components/timer/timer.component';
import { WinnerCardComponent } from './components/winner-card/winner-card.component';
import { RankingDetailComponent } from './components/ranking-detail/ranking-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainPageComponent,
    LogoutComponent,
    NavbarComponent,
    WelcomeComponent,
    ProfileComponent,
    RankingsComponent,
    HeroComponent,
    ITComponent,
    BioComponent,
    GridlistComponent,
    FooterComponent,
    UserAccountComponent,
    GameroomComponent,
    InterfaceUserAccountComponent,
    TimerComponent,
    WinnerCardComponent,
    RankingDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AngularMaterialModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
