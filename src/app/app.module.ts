import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './features/home/containers/home.module';
import { CoreModule } from './core/core.module';

@NgModule({
	declarations: [AppComponent],
	imports: [CoreModule, AppRoutingModule, HomeModule],
	bootstrap: [AppComponent]
})
export class AppModule {}
