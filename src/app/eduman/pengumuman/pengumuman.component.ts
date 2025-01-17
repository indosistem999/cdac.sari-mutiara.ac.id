import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-pengumuman',
    templateUrl: './pengumuman.component.html',
    styleUrls: ['./pengumuman.component.scss']
})
export class PengumumanComponent implements OnInit {

    Pengumuman: any[] = [];

    Length = 0;
    PageSize = 6;
    PageNumber = 1;
    Loading$ = this._coreService.Loading$;

    constructor(
        private _router: Router,
        private _coreService: CoreService,
        private _activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this._coreService.Loading$.next(true);

        const params = this._activatedRoute.snapshot.queryParams['kategori'];

        if (!params) {
            this._coreService.getPengumuman(this.PageSize, this.PageNumber, "")
                .subscribe((result) => {
                    if (result.status) {
                        this.Pengumuman = result.data;
                        this.Length = result.meta.total;
                        setTimeout(() => {
                            this._coreService.Loading$.next(false);
                        }, 1000);
                    }
                })
        } else {
            this._coreService.getPengumumanByKategori(this.PageSize, this.PageNumber, "", params)
                .subscribe((result) => {
                    if (result.status) {
                        this.Pengumuman = result.data;
                        this.Length = result.meta.total;
                        setTimeout(() => {
                            this._coreService.Loading$.next(false);
                        }, 1000);
                    }
                })
        }
    }

    handleRoute(id: string): void {
        let title = id.toLowerCase().replace(/\s/g, '-');
        // window.location.replace(`pengumuman-details?judul=${title}`);
        this._router.navigate(['/pengumuman-details'], { queryParams: { judul: title } });
    }

    handlePageChange(args: any): void {
        this._coreService.getPengumuman(this.PageSize, args, "").subscribe((result) => {
            if (result.status) {
                this.Pengumuman = result.data;
            }
        })
    }

}
