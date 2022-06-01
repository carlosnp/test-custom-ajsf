import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FutureRoutingModule } from './future-routing.module';
import { HomeFormComponent } from './components/home-form/home-form.component';


@NgModule({
  declarations: [
    HomeFormComponent
  ],
  imports: [
    CommonModule,
    FutureRoutingModule
  ]
})
export class FutureModule { }
