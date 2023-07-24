import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";

@NgModule({
  exports: [MatButtonModule,
    MatListModule,
    MatIconModule],
})
export class AngularMaterialModule {}
