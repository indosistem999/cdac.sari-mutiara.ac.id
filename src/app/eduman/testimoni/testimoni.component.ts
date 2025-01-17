import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-testimoni',
    templateUrl: './testimoni.component.html',
    styleUrls: ['./testimoni.component.scss']
})
export class TestimoniComponent implements OnInit {

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

        this._coreService.getTestimoni(1000, 1).subscribe((result) => {
            if (result.status) {
                this.Length = result.data.length;
            }
        })

        this._coreService.getTestimoni(6, 1).subscribe((result) => {
            if (result.status) {
                this.Testimoni = result.data;
                setTimeout(() => {
                    this._coreService.Loading$.next(false);
                }, 1000);
            }
        })
    }

    handleRoute(id: string): void {
        let title = id.toLowerCase().replace(/\s/g, '-');
        this._router.navigate(['/testimoni-details'], { queryParams: { judul: title } });
    }

    handlePageChange(args: any): void {
        this._coreService.getTestimoni(6, args).subscribe((result) => {
            if (result.status) {
                this.Testimoni = result.data;
            }
        })
    }

}
