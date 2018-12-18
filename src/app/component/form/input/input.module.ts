import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ButtonComponent } from './button/button.component';
import { LabelComponent } from './label/label.component';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonComponent,
    CheckboxComponent,
    InputComponent,
    LabelComponent
  ],
  exports: [
    ButtonComponent,
    CheckboxComponent,
    InputComponent,
    LabelComponent
  ]
})
export class InputModule { }
