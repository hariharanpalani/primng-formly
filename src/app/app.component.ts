import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'formly-sample';
	form: FormGroup;
	model: any;
	options: FormlyFormOptions;
	fields: FormlyFieldConfig[];
	type: string;

	constructor(
		private formlyJsonschema: FormlyJsonschema,
		private http: HttpClient,
	) {
		let formlySchema =  {
			"schema": {
			  "title": null,
			  "description": null,
			  "type": "object",
			  "required": [],
			  "properties": {
				"17$Attributes_No_ofcylinders": {
				  "type": "integer",
				  "title": "Attributes_No_ofcylinders"
				},
				"16$Attributes_Fuel_type": {
				  "type": "string",
				  "title": "Attributes_Fuel_type"
				},
				"36$Attributes_Tear_Down_Time": {
				  "type": "date",
				  "title": "Attributes_Tear_Down_Time"
				},
				"37$Attributes_Vehicle_Price": {
				  "type": "number",
				  "title": "Attributes_Vehicle_Price"
				}
			  }
			},
			"model": {
			  "17$Attributes_No_ofcylinders": "",
			  "16$Attributes_Fuel_type": "",
			  "36$Attributes_Tear_Down_Time": "",
			  "37$Attributes_Vehicle_Price": ""
			}
		}

		this.form = new FormGroup({});
				this.options = {};
		let fieldConfig = this.formlyJsonschema.toFieldConfig(formlySchema.schema);
		this.fields = [fieldConfig];
		this.model = formlySchema.model;
	}

	l(name) {
		return 'Same as before';
	}

	submit() {
		console.log(this.model);
	}
	loadExample(type: string) {
		this.http.get<any>(
			`http://localhost:22742/api/services/app/TemplateData/GetFormlyTemplateTabAttributes?templateTabId=8`)
			.subscribe(response => {
				this.form = new FormGroup({});
				this.options = {};
				this.model = response.result[0].model;
				let controls = [this.formlyJsonschema.toFieldConfig(response.result[0].schema)];

				controls[0].fieldGroup.forEach(field => {
					field.expressionProperties = {
						"templateOptions.label": () => this.l(field.templateOptions.label)
					}
				});

				this.fields = controls;
			});
	  }
}
