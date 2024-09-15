import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [MatButtonModule,MatCardModule,FormsModule],
})
export class AngularMaterialModule {}
