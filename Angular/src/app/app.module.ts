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
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { RulesPageComponent } from './components/rules-page/rules-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './@shared/modules/angular-material/angular-material.module';
import { FooterComponent } from './@shared/components/footer/footer.component';
import { GameRulesComponent } from './@shared/components/game-rules/game-rules.component';
import { HeroComponent } from './@shared/components/hero/hero.component';
import { GtmCarouselComponent } from './@shared/components/gtm-carousel/gtm-carousel.component';
import { PlayButtonComponent } from './@shared/components/play-button/play-button.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { PlayPageComponent } from './components/play-page/play-page.component';
import { ReviewMovieComponent } from './@shared/components/review-movie/review-movie.component';
import { HomeCarouselComponent } from './@shared/components/home-carousel/home-carousel.component';
import { FavoritesPageComponent } from './components/favorites-page/favorites-page.component';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainPageComponent,
    LogoutComponent,
    NavbarComponent,
    HomePageComponent,
    ProfilePageComponent,
    RulesPageComponent,
    FooterComponent,
    GameRulesComponent,
    HeroComponent,
    PlayButtonComponent,
    GtmCarouselComponent,
    NotFoundPageComponent,
    PlayPageComponent,
    ReviewMovieComponent,
    HomeCarouselComponent,
    FavoritesPageComponent,

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
