import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../../services/ReportService';
import { ReportPerson, PersonAddress } from '../../../models/reportForm.model';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';


@Component({
    selector: 'intake-people',
    templateUrl: './personType.component.html',
    styleUrls: ['../intake.css']

})

export class PersonTypeComponent  {
    constructor(private reportFormDataService: ReportService, private _fb: FormBuilder) { }


}
