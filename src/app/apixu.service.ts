import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class ApixuService {
	constructor(private http: HttpClient) {}

	getWeather(location: any) {
		return this.http.get(
			`http://api.weatherapi.com/v1/current.json?key=323d0ee759314c3eb7c74857230505&q=${location}&aqi=no`
		);
	}
}
