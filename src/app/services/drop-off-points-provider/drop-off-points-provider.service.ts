import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DropOffPoint} from '../../locations';
import {ApiBaseUrl} from '../../urls.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DropOffPointsProviderService {

  constructor(private httpClient: HttpClient, @Inject(ApiBaseUrl) private apiBaseUrl: string) { }

  getAllPoints(): Observable<DropOffPoint[]> {
    return this.httpClient.get<{data: DropOffPoint[]}>(`${this.apiBaseUrl}/locations`).pipe(map(response => {
      return response.data
    }))
  }
}
