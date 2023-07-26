import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./@core/helpers/auth-guard";
import { LoginComponent } from "./@shared/components/login/login.component";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { RegisterComponent } from "./@shared/components/register/register.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { RulesPageComponent } from "./components/rules-page/rules-page.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { PlayComponent } from "./components/play/play.component";

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "home", component: HomePageComponent },
      { path: "profile", component: ProfileComponent },
      { path: "rules", component: RulesPageComponent },
      { path: "play", component: PlayComponent},
      { path: "", redirectTo: "home", pathMatch: 'full' },
    ],
  },
   { path: '404', component: NotFoundComponent},
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
