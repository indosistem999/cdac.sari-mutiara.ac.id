import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

    Testimoni: any[] = [];

    Length = 0;
    PageSize = 6;
    PageNumber = 1;

    constructor(
        private _router: Router,
        private _coreService: CoreService,
    ) { }

    ngOnInit(): void {
        // this._coreService.getGallery(1000, 1).subscribe((result) => {
        //     if (result.status) {
        //         this.Length = result.data.length;
        //     }
        // })

        this._coreService.getGallery().subscribe((result) => {
            if (result.status) {
                this.Testimoni = result.data;
            }
        })
    }

    handleRoute(id: string): void {
        let title = id.toLowerCase().replace(/\s/g, '-');
        this._router.navigate(['/gallery-details'], { queryParams: { judul: title } });
    }

    handlePageChange(args: any): void {
        this._coreService.getGallery().subscribe((result) => {
            if (result.status) {
                this.Testimoni = result.data;
            }
        })
    }

}