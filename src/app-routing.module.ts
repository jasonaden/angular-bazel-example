import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AngularJsRouteModule} from '@angular/router/upgrade';

import {ROUTES} from './angular-js/app.routes';

export const helloModuleId = './hello-world/hello-world.module#HelloWorldModule';
export const todosModuleId = './todos/todos.module#TodosModule';

// These are lazy-loaded routes - note that we don't import the modules here
// to avoid having an eager dependency on them.
const routes: Routes = [
  {path: '', pathMatch: 'full', loadChildren: helloModuleId},
  {path: 'todos', pathMatch: 'full', loadChildren: todosModuleId},
];

export function getRoutes() {
  // AngularJS routes
  return ROUTES;
}

@NgModule({
  imports:
      [RouterModule.forRoot(routes), AngularJsRouteModule.config({modules: ['app'], getRoutes})],
  exports: [RouterModule, AngularJsRouteModule],
})
export class AppRoutingModule {
}
