import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-agenda-pengumuman-section',
    templateUrl: './agenda-pengumuman-section.component.html',
    styleUrls: ['./agenda-pengumuman-section.component.scss']
})
export class AgendaPengumumanSectionComponent implements OnInit {

    Pengumuman: any[] = [];

    Agenda: any[] = [];

    constructor(
        private _router: Router,
        private _coreService: CoreService
    ) { }

    ngOnInit(): void {
        this._coreService.getAgenda(3, 1, "").subscribe((result) => {
            if (result.status) {
                this.Agenda = result.data;
            }
        })

        this._coreService.getPengumuman(3, 1, "").subscribe((result) => {
            if (result.status) {
                this.Pengumuman = result.data;
            }
        })
    }

    handleRouteAgenda(id: string): void {
        let title = id.toLowerCase().replace(/\s/g, '-');
        // window.location.replace(`agenda-details?judul=${title}`)
        this._router.navigate(['/agenda-details'], { queryParams: { judul: title } });

    }

    handleRoutePengumuman(id: string): void {
        let title = id.toLowerCase().replace(/\s/g, '-');
        // window.location.replace(`pengumuman-details?judul=${title}`);
        this._router.navigate(['/pengumuman-details'], { queryParams: { judul: title } });

    }

    handleLihatSemuaAgenda(): void {
        // window.location.replace('agenda');
        this._router.navigate(['/agenda']);

    }

    handleLihatSemuaPengumuman(): void {
        // window.location.replace('pengumuman')
        this._router.navigate(['/pengumuman']);
    }

    onFormatDateAgenda(tanggal: string): any {
        return new Date(tanggal);
    }
}
