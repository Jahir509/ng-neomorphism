import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { SwitchButtonComponent } from './switch-button/switch-button.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [
    FormsComponent,
    SwitchButtonComponent,
    RadioButtonComponent,
    CheckboxComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
