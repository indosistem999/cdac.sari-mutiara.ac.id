import { AfterViewInit, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-blogsection',
    templateUrl: './blogsection.component.html',
    styleUrls: ['./blogsection.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BlogsectionComponent implements OnInit, AfterViewInit {

    @Input('title') title!: string;
    @Input('limit') limit: number = 3;
    @Input('forDetailBerita') forDetailBerita = false;
    @Input('related') related: any[] = [];

    Berita: any[] = [];

    constructor(
        private _router: Router,
        private _coreService: CoreService
    ) { }

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            if (this.forDetailBerita) {
                this.Berita = this.related;
            } else {
                this._coreService.getBerita(this.limit, 1, "").subscribe((result) => {
                    if (result.status) {
                        this.Berita = result.data;
                    }
                })
            }
        }, 1000);
    }

    handleRoute(id: string): void {
        let title = id.toLowerCase().replace(/\s/g, '-');
        if (this.title == 'Pengumuman Lainnya') {
            window.location.href = `pengumuman-details?judul=${title}`
        } else {
            window.location.href = `blog-details?judul=${title}`
        }
    }
}
