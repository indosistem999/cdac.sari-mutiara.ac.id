import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-programdetails',
    templateUrl: './programdetails.component.html',
    styleUrls: ['./programdetails.component.scss']
})
export class ProgramdetailsComponent implements OnInit, AfterViewInit {

    Detail: any;

    Program: any[] = [];

    constructor(
        private _router: Router,
        private _coreService: CoreService,
        private _activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this._coreService.Loading$.next(true);

        this._coreService.getProgram().subscribe((result) => {
            if (result.status) {
                this.Program = result.data;
                setTimeout(() => {
                    this._coreService.Loading$.next(false);
                }, 1000);
            }
        })
    }

    ngAfterViewInit(): void {
        const detail = JSON.parse(localStorage.getItem('_USILPPG_') as any);
        if (detail) {
            this.getDetail(detail.id);
        };
    }

    private getDetail(id: string) {
        this._coreService.getDetailProgram(id).subscribe((result) => {
            if (result.status) {
                this.Detail = result.data;
            }
        })
    }

    handleRoute(data: any): void {
        if (data.isi_lengkap) {
            localStorage.setItem('_USILPPG_', JSON.stringify(data));
            let title = data.judul.toLowerCase().replace(/\s/g, '-');
            this._router.navigate(['/program-details'], { queryParams: { judul: title } });
        }
    }
}
