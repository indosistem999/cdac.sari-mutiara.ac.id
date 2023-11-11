import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-prestasi',
    templateUrl: './prestasi.component.html',
    styleUrls: ['./prestasi.component.scss']
})
export class PrestasiComponent implements OnInit {

    Testimoni: any[] = [];

    Length = 0;
    PageSize = 6;
    PageNumber = 1;

    constructor(
        private _router: Router,
        private _coreService: CoreService,
    ) { }

    ngOnInit(): void {
        this._coreService.Loading$.next(true);

        this._coreService.getPrestasi(6, 1, "").subscribe((result) => {
            if (result.status) {
                this.Testimoni = result.data;
                this.Length = result.meta.total;
                setTimeout(() => {
                    this._coreService.Loading$.next(false);
                }, 1000);
            }
        })
    }

    handleRoute(data: any): void {
        let title = data.judul.toLowerCase().replace(/\s/g, '-');
        localStorage.setItem('_USILPPRS_', JSON.stringify(data))
        this._router.navigate(['/prestasi-details'], { queryParams: { judul: title } });
    }

    handlePageChange(args: any): void {
        this._coreService.getPrestasi(6, args, "").subscribe((result) => {
            if (result.status) {
                this.Testimoni = result.data;
                this.Length = result.meta.total;
            }
        })
    }


}
