import {ROUTER_UPGRADE_MODULE} from '@angular/router/upgrade';
import {panelModule} from './panel.module';

export function loadAngularJsApp() {
  // @ts-ignore
  return angular
      .module(
          'app', ['ngRoute', ROUTER_UPGRADE_MODULE, 'ngMaterial', 'ngMessages', panelModule.name])
      // add a function to DI to ensure we can get a hold of it through routing
      .value('intervalTime', 500)
      .value('clockStyle', 'color: black; font-size: 2em;');
}
