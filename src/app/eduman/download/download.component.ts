import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-download',
    templateUrl: './download.component.html',
    styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

    Testimoni: any[] = [];

    Length = 0;
    PageSize = 6;
    PageNumber = 1;

    constructor(
        private _router: Router,
        private _coreService: CoreService,
    ) { }

    ngOnInit(): void {
        this._coreService.getDownload(1000, 1).subscribe((result) => {
            if (result.status) {
                this.Length = result.data.length;
            }
        })

        this._coreService.getDownload(6, 1).subscribe((result) => {
            if (result.status) {
                this.Testimoni = result.data;
            }
        })
    }

    handlePageChange(args: any): void {
        this._coreService.getDownload(6, args).subscribe((result) => {
            if (result.status) {
                this.Testimoni = result.data;
            }
        })
    }


}
