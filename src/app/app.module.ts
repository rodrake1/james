import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HomeRoutingModule } from './core/home/home-routing.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		CoreModule,
		AppRoutingModule,
		HomeRoutingModule,
		StoreModule.forRoot({}, {}),
		EffectsModule.forRoot([])
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
