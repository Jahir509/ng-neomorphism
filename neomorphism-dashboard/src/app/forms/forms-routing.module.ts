import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsComponent} from './forms.component';
import {SwitchButtonComponent} from './switch-button/switch-button.component';
import {RadioButtonComponent} from './radio-button/radio-button.component';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {InputComponent} from './input/input.component';

const routes: Routes = [
  {
    path:'',
    component:FormsComponent,
    children:[
      {path:'switch',component:SwitchButtonComponent},
      {path:'radio-button',component:RadioButtonComponent},
      {path:'checkbox',component:CheckboxComponent},
      {path:'input',component:InputComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
