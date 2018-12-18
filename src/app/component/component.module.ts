import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from './box/box.component';
import { FormModule } from './form/form.module';

@NgModule({
  imports: [
    CommonModule,
    FormModule
  ],
  declarations: [
    BoxComponent
  ],
  providers: [],
  exports: [
    BoxComponent,
    FormModule
  ]

})
export class ComponentModule { }
