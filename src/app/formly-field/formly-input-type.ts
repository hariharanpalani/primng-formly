import { Component } from "@angular/core";
import { FieldType } from '@ngx-formly/core';


@Component({
    selector: 'formly-field-primeng-input',
    template: `
        <input type="text" pInputText *ngIf="to.type == 'integer'" pKeyFilter="int"  
                [formControl]="formControl" [formlyAttributes]="field" [class.ng-dirty]="showError">
        <input type="text" pInputText *ngIf="to.type == 'number'" pKeyFilter="num"
        [formControl]="formControl" [formlyAttributes]="field" [class.ng-dirty]="showError">
    `
})
export class FormFieldInputComponent extends FieldType {
}