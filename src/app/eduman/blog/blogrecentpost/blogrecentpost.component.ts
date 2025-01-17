import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-blogrecentpost',
    templateUrl: './blogrecentpost.component.html',
    styleUrls: ['./blogrecentpost.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BlogrecentpostComponent implements OnInit {

    Recent: any[] = [];

    constructor(
        private _router: Router,
        private _coreService: CoreService
    ) { }

    ngOnInit(): void {
        this._coreService.getBerita(4, 1, "").subscribe((result) => {
            if (result.status) {
                this.Recent = result.data;
            }
        })
    }

    handleRoute(title: string): void {
        let titles = title.toLowerCase().replace(/\s/g, '-');
        // window.location.replace(`blog-details?judul=${titles}`);
        this._router.navigate(['/blog-details'], { queryParams: { judul: titles } });
    }
}
