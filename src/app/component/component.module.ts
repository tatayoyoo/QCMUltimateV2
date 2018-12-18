import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { BoxComponent } from './box/box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BoxComponent,
    FormComponent
  ],
  exports: [
    BoxComponent,
    FormComponent
  ]

})
export class ComponentModule { }
