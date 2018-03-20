import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {FormHeaderComponent} from './form-header/form-header.component';
// -----------------PrimeNG IMPORTS------------------------
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {SpinnerModule} from 'primeng/spinner';
import {CalendarModule} from 'primeng/calendar';






@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RadioButtonModule,
    DropdownModule,
    InputTextModule,
    CheckboxModule,
    SpinnerModule,
    CalendarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
