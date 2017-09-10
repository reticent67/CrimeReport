import { NgModule} from '@angular/core';
import {
    MdInputModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdCardModule,
    MdExpansionModule,
    MdGridListModule,
} from '@angular/material';

@NgModule({
  imports: [
    MdInputModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdCardModule,
    MdExpansionModule,
    MdGridListModule,
],
  
  exports: [
    MdInputModule,
    MdButtonModule,
    MdCheckboxModule,
    MdButtonModule,
    MdCardModule,
    MdExpansionModule,
    MdGridListModule,
    ],
})
export class MaterialModule { }