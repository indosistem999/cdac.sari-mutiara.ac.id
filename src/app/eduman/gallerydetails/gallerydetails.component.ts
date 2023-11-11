import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-gallerydetails',
    templateUrl: './gallerydetails.component.html',
    styleUrls: ['./gallerydetails.component.scss']
})
export class GallerydetailsComponent implements OnInit, AfterViewInit {

    Detail: any;

    Related: any;

    constructor(
        private _coreService: CoreService,
        private _activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this._coreService.Loading$.next(true);
    }

    ngAfterViewInit(): void {
        const id = this._activatedRoute.snapshot.queryParams['judul'];
        const title = id.replace(/-/g, " ");

        if (title) {
            this._coreService.getGallery(100, 1)
                .subscribe((result) => {
                    if (result.status) {
                        if (result.data.length) {
                            const gallery = result.data.find((item: any) => { return item.judul == this.titleCaseHyphenToSpace(title) });
                            if (gallery) {
                                this.getDetail(gallery.id);
                            }
                        };

                    }
                })
        }
    }

    private titleCaseHyphenToSpace(inputString: string) {
        // Replace hyphens with spaces
        const stringWithSpaces = inputString.replace(/-/g, ' ');

        // Convert the string to title case
        const titleCaseString = stringWithSpaces.replace(/\w\S*/g, function (word) {
            return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        });

        return titleCaseString;
    }

    private getDetail(id: string) {
        this._coreService.getGalleryDetail(id).subscribe((result) => {
            if (result.status) {
                this.Detail = result.data;
                setTimeout(() => {
                    this._coreService.Loading$.next(false);
                }, 1000);
            }
        })
    }

}
