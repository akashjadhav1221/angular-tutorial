import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Page1Component,
    Page2Component
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PageModule { }
