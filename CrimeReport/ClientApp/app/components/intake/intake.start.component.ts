import { Component, OnInit, Input } from '@angular/core';
import { ReportService } from '../../services/ReportService';


@Component({
    selector: 'intake-start',
    templateUrl: './intake.start.component.html',
    styleUrls: ['./intake.css'],
    providers: [ReportService]

})

export class IntakeStartComponent implements OnInit {
    title = 'Enter Report Details';
    @Input() reportFormData :any;

    constructor(private reportService: ReportService) {

    }

    ngOnInit() {
        this.reportFormData = this.reportService.getFormData();
    }

}
