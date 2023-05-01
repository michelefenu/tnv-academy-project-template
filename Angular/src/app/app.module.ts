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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './@shared/modules/angular-material/angular-material.module';
import { HeroContentComponent } from './components/hero-content/hero-content.component';
import { MovieCardsComponent } from './components/movie-cards/movie-cards.component';
import { SearchComponent } from './components/search/search.component';
import { MovieSectionComponent } from './components/movie-section/movie-section.component';
import { MyFavoritesComponent } from './components/my-favorites/my-favorites.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FavoriteItemComponent } from './components/favorite-item/favorite-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExportAsModule } from 'ngx-export-as'; //module for pdf download


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
    HeroContentComponent,
    MovieCardsComponent,
    SearchComponent,
    MovieSectionComponent,
    MyFavoritesComponent,
    FavoriteItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatExpansionModule,
    ExportAsModule 
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
