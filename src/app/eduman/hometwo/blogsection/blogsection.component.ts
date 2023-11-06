import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-blogsection',
    templateUrl: './blogsection.component.html',
    styleUrls: ['./blogsection.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BlogsectionComponent implements OnInit {

    @Input('title') title!: string;
    @Input('limit') limit: number = 3;

    Berita: any[] = [];

    constructor(
        private _router: Router,
        private _coreService: CoreService
    ) { }

    ngOnInit(): void {
        this._coreService.getBerita(this.limit, 1, "").subscribe((result) => {
            if (result.status) {
                this.Berita = result.data;
            }
        })
    }

    handleRoute(id: string): void {
        console.log("ID =>", id);
        // this._router.navigate(['/blog-details'], { queryParams: { id: id } });
        window.location.href = `blog-details?id=${id}`
    }
}
