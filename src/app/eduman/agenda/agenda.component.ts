import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-agenda',
    templateUrl: './agenda.component.html',
    styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

    Agenda: any[] = [];

    Length = 0;
    PageSize = 6;
    PageNumber = 1;
    Loading$ = this._coreService.Loading$;

    constructor(
        private _router: Router,
        private _coreService: CoreService,
        private _activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        const params = this._activatedRoute.snapshot.queryParams['kategori'];

        if (!params) {
            this._coreService.getAgenda(this.PageSize, this.PageNumber, "")
                .subscribe((result) => {
                    if (result.status) {
                        this.Agenda = result.data;
                        this.Length = result.meta.total;
                        setTimeout(() => {
                            this._coreService.Loading$.next(false);
                        }, 1000);
                    }
                })
        } else {
            this._coreService.getAgendaByKategori(this.PageSize, this.PageNumber, "", params)
                .subscribe((result) => {
                    if (result.status) {
                        this.Agenda = result.data;
                        this.Length = result.meta.total;
                        setTimeout(() => {
                            this._coreService.Loading$.next(false);
                        }, 1000);
                    }
                })
        }
    }

    handleRoute(id: string): void {
        let title = id.toLowerCase().replace(/\s/g, '-');
        this._router.navigate(['/agenda-details'], { queryParams: { judul: title } });
    }

    handlePageChange(args: any): void {
        this._coreService.getAgenda(this.PageSize, args, "").subscribe((result) => {
            if (result.status) {
                this.Agenda = result.data;
            }
        })
    }

}
