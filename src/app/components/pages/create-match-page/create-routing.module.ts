import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { CreateMatchPageComponent } from './create-match-page.component';

const routes: Routes = [{ path: '', component: CreateMatchPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
