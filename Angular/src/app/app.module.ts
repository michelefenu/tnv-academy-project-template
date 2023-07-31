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
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RulesPageComponent } from './components/rules-page/rules-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './@shared/modules/angular-material/angular-material.module';
import { FooterComponent } from './@shared/components/footer/footer.component';
import { GameRulesComponent } from './@shared/components/game-rules/game-rules.component';
import { HeroComponent } from './@shared/components/hero/hero.component';
import { GtmCarouselComponent } from './@shared/components/gtm-carousel/gtm-carousel.component';
import { PlayButtonComponent } from './@shared/components/play-button/play-button.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlayComponent } from './components/play/play.component';
import { ReviewMovieComponent } from './@shared/components/review-movie/review-movie.component';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { FavoritesComponent } from './components/favorites/favorites.component';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainPageComponent,
    LogoutComponent,
    NavbarComponent,
    HomePageComponent,
    ProfileComponent,
    RulesPageComponent,
    FooterComponent,
    GameRulesComponent,
    HeroComponent,
    PlayButtonComponent,
    GtmCarouselComponent,
    NotFoundComponent,
    PlayComponent,
    ReviewMovieComponent,
    HomeCarouselComponent,
    FavoritesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
