import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorldmapComponent } from '../worldmap/worldmap.component';
import { FactsheetListComponent } from '../factsheet-list/factsheet-list.component';
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [
    WorldmapComponent,
    FactsheetListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    WorldmapComponent,
    FactsheetListComponent
  ]
})
export class FactsheetModule { }
