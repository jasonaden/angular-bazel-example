export const OTHER_URL = {
  template:
      `<p>/dashboard in AngularJS configuration with data bindings {{ctrl.nowish | date : 'h:mm:ss'}}`,
  controllerAs: 'ctrl',
  controller: [
    '$interval', 'intervalTime',
    function($interval, intervalTime) {
      const that = this;
      $interval(updateDate, intervalTime);
      updateDate();
      function updateDate() {
        that.nowish = Date.now();
      }
    }
  ]
};

export const ROUTES = {
  '/other-url': {template: '<p>/other-url in AngularJS config</p>'},
  '/dashboard': OTHER_URL
};
