import {Component} from '@angular/core';
import {UpgradeModule} from '@angular/upgrade/static';
import {loadAngularJsApp} from './angular-js/app.module';

@Component({selector: 'app-component', templateUrl: 'app.component.html'})
export class AppComponent {
  constructor(private ngUpgrade: UpgradeModule) {}
  ngOnInit() {
    console.group('AppComponent ngOnInit()');
    console.log(`Initalize AngularJS`);
    const app = loadAngularJsApp();
    this.ngUpgrade.bootstrap(document.body, [app.name]);
    console.groupEnd();
  }
}
