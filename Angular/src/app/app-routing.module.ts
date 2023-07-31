import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./@core/helpers/auth-guard";
import { LoginComponent } from "./@shared/components/login/login.component";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { RegisterComponent } from "./@shared/components/register/register.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { ProfilePageComponent } from "./components/profile-page/profile-page.component";
import { RulesPageComponent } from "./components/rules-page/rules-page.component";
import { NotFoundPageComponent } from "./components/not-found-page/not-found-page.component";
import { PlayPageComponent } from "./components/play-page/play-page.component";
import { FavoritesPageComponent } from "./components/favorites-page/favorites-page.component";

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "home", component: HomePageComponent },
      { path: "profile", component: ProfilePageComponent },
      { path: "rules", component: RulesPageComponent },
      { path: "play", component: PlayPageComponent},
      { path: "favorites", component: FavoritesPageComponent},
      { path: "", redirectTo: "home", pathMatch: 'full' },
    ],
  },
   { path: '404', component: NotFoundPageComponent},
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
}
)
export class AppRoutingModule {}
