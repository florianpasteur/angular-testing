import { InjectionToken } from '@angular/core';

export const ApiBaseUrl = new InjectionToken('ApiBaseUrl', {
  providedIn: 'root',
  factory: () => 'http://localhost:7559',
});
