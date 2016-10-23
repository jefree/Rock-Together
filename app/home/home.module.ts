import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'

import { SessionModule } from '../session/session.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,

    SessionModule
  ],
  declarations: [ HomeComponent ],
  bootstrap: [ HomeComponent ]
})
export class HomeModule { }

