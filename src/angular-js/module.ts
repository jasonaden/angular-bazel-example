import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RenderAngularJsRoute, ROUTER_UPGRADE_MODULE, RouterUpgradeModule} from '@angular/router/upgrade';
import {getAngularJSGlobal, setAngularJSGlobal, UpgradeModule} from '@angular/upgrade/static';

import {AngularJSComponent} from './component';
import {ROUTES} from './routes';


let initalized = false;

const routes: Routes = [{path: '**', component: AngularJSComponent}];

@NgModule({
  declarations: [AngularJSComponent],
  imports: [RouterModule.forChild(routes)],
})
export class AngularJSModule {
  // The constructor is called only once, so we bootstrap the application
  // only once, when we first navigate to the legacy part of the app.
  constructor(upgrade: UpgradeModule) {
    if (!initalized) {
      upgrade.bootstrap(document.body, [appModule.name]);
      // setUpLocationSync(upgrade);
      initalized = true;
    }
  }
}

// const angular = getAngularJSGlobal();
// @ts-ignore
export const appModule = angular.module('app', ['ngRoute', ROUTER_UPGRADE_MODULE]);
appModule.config(function($routeProvider: any, $locationProvider: any) {
  $locationProvider.html5Mode(true);

  Object.keys(ROUTES).forEach(path => {
    $routeProvider.when(path, ROUTES[path]);
  });
});
