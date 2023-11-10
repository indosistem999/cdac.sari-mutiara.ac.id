import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-blogmain',
    templateUrl: './blogmain.component.html',
    styleUrls: ['./blogmain.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BlogmainComponent implements OnInit {

    Berita: any[] = [];

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
        const params = this._activatedRoute.snapshot.queryParams['kategori'];

        if (!params) {
            this._coreService.getBerita(this.PageSize, this.PageNumber, "")
                .subscribe((result) => {
                    if (result.status) {
                        this.Berita = result.data;
                        this.Length = result.meta.total;
                        setTimeout(() => {
                            this._coreService.Loading$.next(false);
                        }, 1000);
                    }
                })
        } else {
            this._coreService.getBeritaByKategori(this.PageSize, this.PageNumber, "", params)
                .subscribe((result) => {
                    if (result.status) {
                        this.Berita = result.data;
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
        this._router.navigate(['/blog-details'], { queryParams: { judul: title } });
    }

    handlePageChange(args: any): void {
        this._coreService.getBerita(this.PageSize, args, "").subscribe((result) => {
            if (result.status) {
                this.Berita = result.data;
            }
        })
    }
}
