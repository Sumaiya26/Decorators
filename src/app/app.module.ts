import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Child4Component } from './child4/child4.component';
import { Child5Component } from './child5/child5.component';
import { Child6Component } from './child6/child6.component';
import { Child7Component } from './child7/child7.component';
import { Child8Component } from './child8/child8.component';
import { Routes } from '@angular/router';
import { Child9Component } from './child9/child9.component';
import { Child10Component } from './child10/child10.component';
import { Child11Component } from './child11/child11.component';
import { Child12Component } from './child12/child12.component';
import { Child13Component } from './child13/child13.component';

const routes: Routes = [
  {path:"Check Book Details",component:Child9Component},
  {path:"Student Pending Details",component:Child10Component},
  {path:"Department Details",component:Child11Component},
  {path:"AddBooks",component:Child12Component},
  {path:"IssuedBooks",component:Child13Component}
]



@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    Child4Component,
    Child5Component,
    Child6Component,
    Child7Component,
    Child8Component,
    Child9Component,
    Child10Component,
    Child11Component,
    Child12Component,
    Child13Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
