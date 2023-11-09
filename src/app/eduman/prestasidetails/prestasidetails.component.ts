import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-prestasidetails',
    templateUrl: './prestasidetails.component.html',
    styleUrls: ['./prestasidetails.component.scss']
})
export class PrestasidetailsComponent implements OnInit, AfterViewInit {

    Detail: any;

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
            const data = JSON.parse(localStorage.getItem('_USILPPRS_') as any)

            if (data) {
                this.getDetail(data.id);
            }
        }
    }

    private getDetail(id: string) {
        this._coreService.getDetailPrestasi(id).subscribe((result) => {
            if (result.status) {
                this.Detail = result.data;
            }
        })
    }

}
