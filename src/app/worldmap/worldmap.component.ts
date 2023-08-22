import {
  Component,
  Output,
  ElementRef,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { FactsheetService } from '../factsheet/factsheet.service';
import { FactsheetListComponent } from '../factsheet-list/factsheet-list.component';

@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.css'],
})
export class WorldmapComponent {
  constructor(
    private factsheetService: FactsheetService,
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit() {
    const elemSVG = this.elementRef.nativeElement.querySelector('svg');
    const elemPath = elemSVG.querySelectorAll('path');
    elemPath.forEach((path: SVGPathElement) => {
      path.addEventListener('mouseover', this.hover.bind(this));
    });
  }

  @Output() elemName = new EventEmitter<string>();
  @Output() elemCapital = new EventEmitter<string>();
  @Output() elemRegion = new EventEmitter<string>();
  @Output() elemIncome = new EventEmitter<string>();
  @Output() elemLat = new EventEmitter<string>();
  @Output() elemLong = new EventEmitter<string>();
  @ViewChild(FactsheetListComponent)
  private factsheetListComponent!: FactsheetListComponent;

  hover(event: MouseEvent) {
    const path = event.target as SVGPathElement;
    const countryId = path.id;

    this.factsheetService.getFactsheet(countryId).subscribe((fact: any) => {
      const name = fact[1][0].name;
      const capitalCity = fact[1][0].capitalCity;
      const region = fact[1][0].region.value;
      const income = fact[1][0].incomeLevel.value;
      const latitude = fact[1][0].latitude;
      const longitude = fact[1][0].longitude;

      this.elemName.emit(name);
      this.elemCapital.emit(capitalCity);
      this.elemRegion.emit(region);
      this.elemIncome.emit(income);
      this.elemLat.emit(latitude);
      this.elemLong.emit(longitude);
    });
  }

}
