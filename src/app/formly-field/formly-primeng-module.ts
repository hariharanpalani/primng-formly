import { NgModule } from "@angular/core";
import { FORMLY_FIELD_COMPONENT, PRIMENG_FORMLY_CONFIG } from './formly-primeng-config';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
    declarations: FORMLY_FIELD_COMPONENT,
    imports: [
        CommonModule,
        InputTextModule,
        ReactiveFormsModule,
        KeyFilterModule,
        CalendarModule,
        BrowserAnimationsModule,
        MultiSelectModule,
        DropdownModule,
        FormlyModule.forChild(PRIMENG_FORMLY_CONFIG),
        FormlyPrimeNGModule
    ]
})
export class CustomPrimeNgModule {}