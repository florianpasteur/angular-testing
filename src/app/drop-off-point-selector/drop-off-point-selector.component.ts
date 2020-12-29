import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DropOffPoint, locations} from '../locations';

@Component({
  selector: 'app-drop-off-point-selector',
  templateUrl: './drop-off-point-selector.component.html',
  styleUrls: []
})
export class DropOffPointSelectorComponent implements OnInit {

  @Input('dropOffPoints')
  dropOffPoints: DropOffPoint[]

  @Output()
  selectedDropOffPoints = new EventEmitter<DropOffPoint>()

  constructor() { }

  mapLatitude = null;
  mapLongitude = null;

  ngOnInit(): void {
  }

  showOnMap(location: DropOffPoint) {
    this.mapLatitude = location.lat
    this.mapLongitude = location.lng

  }

  choosePoint(point: DropOffPoint) {
    this.selectedDropOffPoints.emit(point)
  }
}
