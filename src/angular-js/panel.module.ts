import {getAngularJSGlobal} from '@angular/upgrade/static';
import {AnimationCtrl, DialogCtrl} from './panel.controller';

const angular = getAngularJSGlobal();

export const panelModule = angular.module('panelAnimationsDemo', ['ngMaterial'])
                               .controller('AnimationCtrl', AnimationCtrl)
                               .controller('DialogCtrl', DialogCtrl);