import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBoxModule } from '../search-box/search-box.module';
import { TopListModule } from '../top-list/top-list.module';

import { SessionComponent } from './session.component';

@NgModule({
  imports: [
    CommonModule,

    SearchBoxModule,
    TopListModule
  ],
  declarations: [ SessionComponent ],
  exports: [ SessionComponent ]
})
export class SessionModule { }
