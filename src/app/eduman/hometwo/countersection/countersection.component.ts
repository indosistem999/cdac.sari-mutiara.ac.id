import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-countersection',
    templateUrl: './countersection.component.html',
    styleUrls: ['./countersection.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CountersectionComponent implements OnInit {

    Program: any[] = [];

    constructor(
        private _router: Router,
        private _coreService: CoreService,
    ) { }

    ngOnInit(): void {
        this._coreService.getProgram().subscribe((result) => {
            if (result.status) {
                this.Program = result.data;
            }
        })
    }

    handleRoute(data: any): void {
        localStorage.setItem('_USILPPG_', JSON.stringify(data));
        let title = data.judul.toLowerCase().replace(/\s/g, '-');
        this._router.navigate(['/program-details'], { queryParams: { judul: title } });
    }
}
