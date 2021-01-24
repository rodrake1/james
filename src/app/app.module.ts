import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './features/home/containers/home.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
	declarations: [AppComponent],
	imports: [CoreModule, AppRoutingModule, HomeModule, StoreModule.forRoot({}, {}), EffectsModule.forRoot([])],
	bootstrap: [AppComponent]
})
export class AppModule {}
