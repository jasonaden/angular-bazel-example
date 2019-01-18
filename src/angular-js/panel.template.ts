export const PANEL_TEMPLATE = `
<div class="demo-md-panel-animation md-padding" ng-controller="AnimationCtrl as ctrl">
  <h2>Animations</h2>
  <div layout="row">
    <div flex="25">
      <h3>OpenFrom:</h3>
      <md-radio-group ng-model="ctrl.openFrom">
        <md-radio-button value="button">Button</md-radio-button>
        <md-radio-button value="corner">Top/Left Corner</md-radio-button>
        <md-radio-button value="bottom">Bottom Center</md-radio-button>
      </md-radio-group>
    </div>

    <div flex="25">
      <h3>CloseTo:</h3>
      <md-radio-group ng-model="ctrl.closeTo">
        <md-radio-button value="button">Button</md-radio-button>
        <md-radio-button value="corner">Top/Left Corner</md-radio-button>
        <md-radio-button value="bottom">Bottom Center</md-radio-button>
      </md-radio-group>
    </div>

    <div flex="25">
      <h3>AnimationType:</h3>
      <md-radio-group ng-model="ctrl.animationType">
        <md-radio-button value="none">None</md-radio-button>
        <md-radio-button value="slide">Slide</md-radio-button>
        <md-radio-button value="scale">Scale</md-radio-button>
        <md-radio-button value="fade">Fade</md-radio-button>
        <md-radio-button value="custom">Custom</md-radio-button>
      </md-radio-group>
    </div>

    <div flex="25">
      <h3>Duration:</h3>
      <md-input-container>
        <label>All animations</label>
        <input
          type="number"
          ng-model="ctrl.duration"
          ng-change="ctrl.separateDurations.open = ctrl.separateDurations.close = ctrl.duration">
      </md-input-container>

      <md-input-container>
        <label>Open animation</label>
        <input
          type="number"
          ng-model="ctrl.separateDurations.open"
          ng-change="ctrl.duration = null">
      </md-input-container>

      <md-input-container>
        <label>Close animation</label>
        <input
          type="number"
          ng-model="ctrl.separateDurations.close"
          ng-change="ctrl.duration = null">
      </md-input-container>
    </div>
  </div>

  <div class="demo-md-panel-content">
    <md-button class="animation-target md-primary md-raised" ng-click="ctrl.showDialog($event)">
      Dialog
    </md-button>
  </div>
</div>
`;