import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
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
    PageSize = 4;
    PageNumber = 1;

    constructor(
        private _router: Router,
        private _coreService: CoreService
    ) { }

    ngOnInit(): void {
        this._coreService.getBerita(this.PageSize, this.PageNumber, "").subscribe((result) => {
            if (result.status) {
                this.Berita = result.data;
                this.Length = result.meta.total;
            }
        })
    }

    handleRoute(id: string): void {
        this._router.navigate(['/blog-details'], { queryParams: { id: id } });
    }

    handlePageChange(args: any): void {
        this._coreService.getBerita(this.PageSize, args, "").subscribe((result) => {
            if (result.status) {
                this.Berita = result.data;
            }
        })
    }
}
