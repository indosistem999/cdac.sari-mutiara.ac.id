import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-pengumumandetails',
    templateUrl: './pengumumandetails.component.html',
    styleUrls: ['./pengumumandetails.component.scss']
})
export class PengumumandetailsComponent implements OnInit, AfterViewInit {

    Detail: any;

    Related: any;

    Loading$ = this._coreService.Loading$;

    constructor(
        private _coreService: CoreService,
        private _activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        const id = this._activatedRoute.snapshot.queryParams['judul'];
        const title = id.replace(/-/g, " ");

        if (title) {
            this._coreService.getPengumuman(100, 1, this.titleCaseHyphenToSpace(title))
                .subscribe((result) => {
                    if (result.status) {
                        if (result.data.length) {
                            this.getDetail(result.data[0].id);
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
        this._coreService.getDetailPengumuman(id).subscribe((result) => {
            if (result.status) {
                this.Detail = result.data;
                this.Related = result.related;
                setTimeout(() => {
                    this._coreService.Loading$.next(false);
                }, 1000);
            }
        })
    }

}
