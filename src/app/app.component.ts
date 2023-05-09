import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApixuService } from './apixu.service';
import { Observable } from 'rxjs';
import { wind_dir_to_degree } from './wind_dir_to_degree';
import { flag_to_text } from './flag_to_text';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	readonly wind_dir_to_degree = wind_dir_to_degree;
	readonly flag_to_text = flag_to_text;
	weather: any;
	constructor(private FormBuilder: FormBuilder, private apixuService: ApixuService) {}
	weatherData: any;
	isShowDiv = true;
	toggleDisplay() {
		this.isShowDiv = !this.isShowDiv;
	}
	//location: any;
	weatherSearchForm = new FormGroup({
		location: new FormControl('', [Validators.minLength(3), Validators.required]),
	});
	temp = new FormGroup({});
	profileForm: any;
	event: any = {
		name: '1',
		lname: '2',
	};
	val!: number;
	myObservable = new Observable((observer) => {
		console.log('Observable starts');
		setTimeout(() => {
			observer.next('1');
		}, 500);
		setTimeout(() => {
			observer.next('2');
		}, 1000);
		setTimeout(() => {
			observer.next('3');
		}, 1500);
		setTimeout(() => {
			observer.next('4');
		}, 2000);
		setTimeout(() => {
			observer.next('5');
		}, 2500);
	});

	weatherResponse!: Observable<any>;

	ngOnInit() {
		this.weatherSearchForm = this.FormBuilder.group({
			location: [''],
		});
		this.myObservable.subscribe((val: any) => {
			console.log((this.val = val));
		});

		// this.profileForm.updateValueAndValidity()
		// this.profileForm.markAllAsTouched();
		// this.profileForm.controls.firstName.markAsDirty();
	}
	sendToAPIXU() {
		this.apixuService
			.getWeather(this.weatherSearchForm.value.location)
			.subscribe((data: any) => (this.weatherData = data));

		//this.weatherResponse = this.apixuService
		// .getWeather(this.weatherSearchForm.getRawValue().location || '')
		// .subscribe(data => this.weatherData = data);
		console.log(this.weatherData);
	}

	onSubmit() {
		console.warn(this.weatherSearchForm.value);
	}

	onclick() {
		console.warn(this.temp.value);
	}

	handleClick() {
		console.log(this.event.value);
	}

	getUrl() {
		const shortCountry = this.weatherData.location?.name;
		return `https://wikipedia.org/wiki/${shortCountry}`;
	}
}
