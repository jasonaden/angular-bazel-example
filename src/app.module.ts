
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterUpgradeModule} from '@angular/router/upgrade';
import {UpgradeModule} from '@angular/upgrade/static';
import {StoreModule} from '@ngrx/store';

import {loadAngularJsApp} from './angular-js/module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './material/material.module';
import {todoReducer} from './reducers/reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule, UpgradeModule, RouterUpgradeModule, BrowserModule, BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot(
        {todoReducer},
        )
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(upgrade: UpgradeModule) {
    console.group('AppModule Constructor');
    console.log(
        `This should happen before instantiating AngularJsRouteService ($route replacement)`);
    const app = loadAngularJsApp();
    // upgrade.bootstrap(document.body, [app.name]);
    console.groupEnd();
  }
}
