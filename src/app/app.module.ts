import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyPrimeNGModule} from '@ngx-formly/primeng';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomPrimeNgModule } from './formly-field/formly-primeng-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    /*FormlyModule.forRoot({
      types: [{ name: 'string', extends: 'input' },
      {
        name: 'number',
        component: FormFieldPrimeNgComponent,
        defaultOptions: {
          templateOptions: {
            type: 'number'
          },
        },
      },
      {
        name: 'integer',
        component: FormFieldPrimeNgComponent,
        defaultOptions: {
          templateOptions: {
            type: 'integer',
          },
        },
      },
      { name: 'object', component: ObjectTypeComponent },
    ] 
    }),*/
    FormlyModule.forRoot(),
    CustomPrimeNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
