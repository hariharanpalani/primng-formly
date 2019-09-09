import { Component } from "@angular/core";
import { FieldType } from '@ngx-formly/core';


@Component({
    selector: 'formly-field-primeng-input',
    template: `
        <p-calendar [showIcon]="true"
        [formControl]="formControl" [formlyAttributes]="field" [class.ng-dirty]="showError"></p-calendar>
    `
})
export class FormFieldDateComponent extends FieldType {
}