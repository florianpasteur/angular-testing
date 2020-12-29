import {Component, OnInit} from '@angular/core';
import {DropOffPointsProviderService} from './services/drop-off-points-provider/drop-off-points-provider.service';
import {DropOffPoint} from './locations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hackmazon-with-angular';

  public dropOffPoints: DropOffPoint[];

  constructor(private dropOffPointsProviderService: DropOffPointsProviderService) {
  }

  ngOnInit(): void {
    this.dropOffPointsProviderService.getAllPoints().subscribe(dropOffPoints => {
      this.dropOffPoints = dropOffPoints
    })
  }

  pointSelected(point: DropOffPoint) {
    alert(JSON.stringify(point))
  }
}
