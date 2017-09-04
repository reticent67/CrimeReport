import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReportService } from '../../services/ReportService';
import { ReportDetails} from '../../models/reportForm.model';

@Component({
    selector: 'intake-details',
    templateUrl: './intake.details.component.html',
    styleUrls: ['./intake.css']
})

export class IntakeDetailsComponent implements OnInit {
    title = "Enter Report Details";
    reportDetails: ReportDetails;
    detailsForm: FormGroup;


    constructor(private _fb: FormBuilder, private reportService: ReportService) { }

    ngOnInit() {
        this.reportDetails = this.reportService.getReportDetails();
        this.detailsForm = this.createForm(this.reportDetails);
    }

    createForm(data: ReportDetails): FormGroup {
        const formGroup = this._fb.group({
            reportTitle : [data.reportTitle],
            incidentNum : [data.incidentNum],
            occurranceStart : [data.occurranceStart],
            occurranceEnd : [data.occurranceEnd],
            occurranceLoc : [data.occurranceLoc],
            reportSummary : [data.reportSummary]
        });
        return formGroup;
    }


    save(form: any) {
       
        this.reportService.setReportDetails(form.value);
        

    }
  
}