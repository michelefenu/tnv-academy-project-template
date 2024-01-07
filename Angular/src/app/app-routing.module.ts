import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./@core/helpers/auth-guard";
import { LoginComponent } from "./@shared/components/login/login.component";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { RegisterComponent } from "./@shared/components/register/register.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { RankingsComponent } from "./components/rankings/rankings.component";
import { HeroComponent } from "./components/hero/hero.component";
import {ITComponent} from "./components/it/it.component";
import { UserAccountComponent } from "./components/user-account/user-account.component";
import { GameroomComponent } from "./components/gameroom/gameroom.component";
import { CountdownModule } from 'ngx-countdown';
import { InterfaceUserAccountComponent } from "./components/interface-user-account/interface-user-account.component";
import { WinnerCardComponent } from "./components/winner-card/winner-card.component";

const routes: Routes = [
  {
    path: "",
    component: ITComponent,
  },
  {
  path: "userAccount",
  canActivate: [AuthGuard],
        component: UserAccountComponent,
        children: [
    /* commentare in caso si voglia visualizzare la gameroom o la winner room senza loggare */
          { path: "gameroom", component: GameroomComponent },
          { path: "winner-card", component: WinnerCardComponent }, 
        ],
      },
        /*  In versione di uscita, eliminare i path gameroom e winner-card e lasciare l'accesso solo tramite authguard da userAccount*/
        {
          path: "gameroom",
          component: GameroomComponent
        },
        {
          path: "winner-card",
        component: WinnerCardComponent
      },

  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  { path: "**", redirectTo: "" },   /* equipara un url fake-unvalid a non scrivere nessun carattere */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
