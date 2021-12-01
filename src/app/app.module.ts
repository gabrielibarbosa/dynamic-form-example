import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { DynamicFormPoUiComponent } from './dynamic-form-po-ui/dynamic-form-po-ui.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormPoUiComponent,
    SimpleFormComponent,
  ],
  imports: [
    BrowserModule,
    PoModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
