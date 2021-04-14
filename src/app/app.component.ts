import { Component, OnInit } from '@angular/core';
import { SpaceService } from './space.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  developedBy = 'Shakti Singh';
  products;
  yearList = [];
  launch;
  land;

  constructor(public spaceService: SpaceService) { }

  ngOnInit() {
    this.getYear();
    this.getProduct();
  }

  getProduct() {
    this.spaceService.getAllProduct().subscribe(res => {
      this.products = res;
    })
  }

  getYear() {
    for (let i = 2006; i <= 2020; i++) {
      let data = { id: i, value: i }
      this.yearList.push(data);
    }
  }


  getLaunchData(val) {
    this.products = [];
    this.launch = val;
    this.spaceService.getLaunchSuccessFilter(val).subscribe(res => {
      this.products = res;
    })
  }

  getLandingData(land) {
    this.products = [];
    this.land = land;
    if (this.launch) {
      this.spaceService.getLaunchLandFilter(this.launch, land).subscribe(res => {
        this.products = res;
      })
    }
    else {
      this.spaceService.getLaunchLandFilter(false, land).subscribe(res => {
        this.products = res;
      })
    }
  }

  getYearData(year) {
    this.products = [];
    if (this.launch && this.land) {
      this.spaceService.getAllWithFilter(this.launch, this.land, year).subscribe(res => {
        this.products = res;
      })
    }
    else {
      this.spaceService.getAllProduct(`&launch_year=${year}`).subscribe(res => {
        this.products = res;
      })
    }
  }
}
