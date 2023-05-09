import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from './apixu.service';
import { MatIconModule } from '@angular/material/icon';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		MatIconModule,
		MdbCheckboxModule,
	],
	providers: [ApixuService],
	bootstrap: [AppComponent],
})
export class AppModule {}
