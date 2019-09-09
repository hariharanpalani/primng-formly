import { FormFieldDateComponent } from './formly-date-type';
import { FormFieldInputComponent } from './formly-input-type';
import { ConfigOption } from '@ngx-formly/core';
import { ObjectTypeComponent } from '../object-type';
import { FormlyWrapperFormField } from '@ngx-formly/primeng';
import { FormlyFieldDropDownComponent } from './formly-dropdown';
import { FormlyFieldMultiSelectComponent } from './formly-multiselect';


export const FORMLY_FIELD_COMPONENT = [
    FormFieldDateComponent,
    FormFieldInputComponent,
    ObjectTypeComponent,
    FormlyFieldDropDownComponent,
    FormlyFieldMultiSelectComponent
]

export const PRIMENG_FORMLY_CONFIG: ConfigOption = {
    types: [{ name: 'string', extends: 'input' },
    {
        name: 'number',
        component: FormFieldInputComponent,
        wrappers: ['form-field'],
        defaultOptions: {
            templateOptions: {
                type: 'number'
            },
        },
    },
    {
        name: 'integer',
        component: FormFieldInputComponent,
        wrappers: ['form-field'],
        defaultOptions: {
            templateOptions: {
                type: 'integer',
            },
        },
    },
    {
        name: 'date',
        component: FormFieldDateComponent,
        wrappers: ['form-field'],
        defaultOptions: {
            type: 'date'
        }
    },
    {
        name: 'multiselect',
        component: FormlyFieldMultiSelectComponent,
        wrappers: ['form-field'],
        defaultOptions: {
            type: 'multiselect'
        }
    },
    {
        name: 'dropdown',
        component: FormlyFieldDropDownComponent,
        wrappers: ['form-field'],
        defaultOptions: {
            type: 'dropdown'
        }
    },
    { name: 'object', component: ObjectTypeComponent }
    ],
    wrappers: [
      { name: 'form-field', component: FormlyWrapperFormField },
    ]
}