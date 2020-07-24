import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationPageComponent } from './pages/configuration/configuration.page.component';
import { SelectionPageComponent } from './pages/selection/selection.page.component';
import { DemoPageComponent } from './pages/demo/demo.page.component';

const routes: Routes = [
  { path: 'config', component: ConfigurationPageComponent },
  { path: 'select', component: SelectionPageComponent },
  { path: 'demo', component: DemoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
