import {Component, OnInit, ChangeDetectorRef, Input, OnChanges, SimpleChanges, AfterViewChecked} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnChanges{
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  @Input()
  lat = 48.860991667536894;
  @Input()
  lng = 2.3472367632773126;
  private marker: mapboxgl.Marker;

  constructor() { }
  ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1IjoiZmxvcmlhbi1oYWNrYWdlcyIsImEiOiJja2o4Zm9qYzgwd3M2MnhwNWpic2VncTZwIn0.nDV9geVp0tXfLHh77o1LaA',
      container: 'map',
      style: this.style,
      zoom: 18,
      center: [48.860991667536894, 2.3472367632773126]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.lat && changes.lng && !changes.lat.firstChange && !changes.lng.firstChange) {
      this.map.setCenter([this.lng || 48.860991667536894, this.lat || 2.3472367632773126])
      if (this.marker) {
        this.marker.remove();
      }
      this.marker = new mapboxgl.Marker({
        color: "#FFFFFF",
        draggable: false
      }).setLngLat([this.lng, this.lat])
        .addTo(this.map);

      if (this.map.getZoom() < 10) {
        this.map.setZoom(18)
      }

      this.map.resize()
    }
  }

}
