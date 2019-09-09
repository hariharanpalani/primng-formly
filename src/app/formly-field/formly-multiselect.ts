import { Component } from "@angular/core";
import { FieldType } from '@ngx-formly/core';


@Component({
    selector: 'formly-field-primeng-multiselect',
    template: `
    <p-multiSelect  [options]="to.options" [formControl]="formControl"
            [formlyAttributes]="field" >
    </p-multiSelect>
    `
})
export class FormlyFieldMultiSelectComponent extends FieldType {
    constructor() {
        super();
    }
    debugger;
    findElement() {

    }
}