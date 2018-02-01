import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  private api = 'https://query.yahooapis.com/v1/public/yql';
  private endpoint = '';

  constructor(private http: Http) {}

  private getQueryString(city) {
    return `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}") and u="c"`;
  }

  getData(city) {
    this.endpoint = `${this.api}?q=${this.getQueryString(city)}&format=json`;
    return this.http.get(this.endpoint).map((res: Response) => res.json());
  }
}
