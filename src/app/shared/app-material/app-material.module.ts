import { NgModule } from '@angular/core';
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatProgressSpinnerModule
  ]
})
export class AppMaterialModule { }
