import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateRoutingModule } from './create-routing.module';
import { CreateMatchPageComponent } from './create-match-page.component';
import { CreateMatchComponent } from '../../create-match/create-match.component';


@NgModule({
  declarations: [CreateMatchPageComponent, CreateMatchComponent],
  imports: [CommonModule, CreateRoutingModule, ReactiveFormsModule],
})
export class CreateModule {}
