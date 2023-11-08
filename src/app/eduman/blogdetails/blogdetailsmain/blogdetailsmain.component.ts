import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-blogdetailsmain',
    templateUrl: './blogdetailsmain.component.html',
    styleUrls: ['./blogdetailsmain.component.scss']
})
export class BlogdetailsmainComponent implements OnInit, AfterViewInit {

    Detail: any;

    Related: any;

    constructor(
        private _coreService: CoreService,
        private _activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        const id = this._activatedRoute.snapshot.queryParams['judul'];

        this._coreService.getBerita(100, 1, id).subscribe((result) => {
            if (result.status) {
                if (result.data.length) {
                    this.getDetail(result.data[0].id);
                };

            }
        })
    }

    private getDetail(id: string) {
        this._coreService.getDetailBerita(id).subscribe((result) => {
            if (result.status) {
                this.Detail = result.data;
                this.Related = result.related;
            }
        })
    }
}
