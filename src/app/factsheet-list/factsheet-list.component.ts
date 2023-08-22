import { Component, OnInit, Input } from '@angular/core';
import { FactsheetService } from '../factsheet/factsheet.service';
import { Factsheet } from '../models/factsheet';
import { WorldmapComponent } from '../worldmap/worldmap.component';

@Component({
  selector: 'app-factsheet-list',
  templateUrl: './factsheet-list.component.html',
  styleUrls: ['./factsheet-list.component.css'],
})
export class FactsheetListComponent implements OnInit {
  @Input() name!: string;
  @Input() capital!: string;
  @Input() region!: string;
  @Input() income!: string;
  @Input() latitude!: string;
  @Input() longitude!: string;

  constructor() {}

  ngOnInit(): void {}
}
