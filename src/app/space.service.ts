import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor(public http: HttpClient) { }

  productURL = 'https://api.spaceXdata.com/v3/launches?limit=100';

  getAllProduct(year?: string) {
    return this.http.get(`${this.productURL}${year}`);
  }

  getLaunchSuccessFilter(val) {
    return this.http.get(`${this.productURL}&launch_success=${val}`);
  }

  getLaunchLandFilter(launch, land) {
    return this.http.get(`${this.productURL}&launch_success=${launch}&land_success=${land}`);
  }

  getAllWithFilter(launch, land, year) {
    return this.http.get(`${this.productURL}&launch_success=${launch}&land_success=${land}&launch_year=${year}`);
  }
}
