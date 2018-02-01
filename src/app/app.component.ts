import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService],
})

export class AppComponent implements OnInit {
  data = {};
  loaded = false;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getData('london, uk').subscribe(
      (data) => {
        this.loaded = true;
        const {
          astronomy,
          atmosphere,
          item: { condition, forecast, title },
          location,
          units,
          wind,
        } = data.query.results.channel;
        this.data = {
          astronomy,
          atmosphere,
          condition,
          forecast,
          title,
          location,
          units,
          wind,
        };
        console.log(this.data);
      }
    );
  }
}
