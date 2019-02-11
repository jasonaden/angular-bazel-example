export const PANEL_DIALOG_TEMPLATE = `
<div role="dialog" aria-label="Eat me!" layout="column" layout-align="center center">
  <md-toolbar>
    <div class="md-toolbar-tools">
      <h2>Surprise!</h2>
    </div>
  </md-toolbar>

  <div class="demo-dialog-content">
    <p>
      You hit the secret button. Here's a donut:
    </p>

    <div layout="row" >
      <img flex alt="Delicious donut" src="http://material.angularjs.org/latest/img/donut.jpg">
    </div>
  </div>

  <div layout="row" class="demo-dialog-button">
    <md-button md-autofocus flex class="md-primary" ng-click="ctrl.closeDialog()">
      Close
    </md-button>
  </div>
</div>`;