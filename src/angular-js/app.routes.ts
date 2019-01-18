import {PANEL_TEMPLATE} from './panel.template';

export const DASHBOARD_CONFIG = {
  template: `
    <p>/dashboard in AngularJS</p>

    <h3>Clock with Data Bindings</h3>
    <span style="{{ctrl.clockStyle}}">{{ctrl.nowish | date : 'hh:mm:ss.sss'}}</span>
  `,
  controllerAs: 'ctrl',
  controller: [
    '$interval', '$scope', 'intervalTime', 'clockStyle',
    function($interval, $scope, intervalTime, clockStyle) {
      const that = this;
      that.clockStyle = clockStyle;
      const interval = $interval(updateDate, intervalTime);
      updateDate();
      function updateDate() {
        that.nowish = Date.now();
        // console.info(that.nowish);
      }

      $scope.$on('$destroy', () => {
        $interval.cancel(interval);
      });
    }
  ]
};

export const ROUTES = {
  '/other-url': {template: '<p>/other-url in AngularJS config</p>'},
  '/dashboard': DASHBOARD_CONFIG,
  '/panel-example': {template: PANEL_TEMPLATE}
};
