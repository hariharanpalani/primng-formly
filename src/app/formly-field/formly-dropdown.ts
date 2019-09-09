import { Component } from "@angular/core";
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'formly-field-primeng-dropdown',
    template: `
        <p-dropdown [options]="to.options" filter="true"  [formControl]="formControl"
        [formlyAttributes]="field" ></p-dropdown>
    `
})
export class FormlyFieldDropDownComponent extends FieldType {}