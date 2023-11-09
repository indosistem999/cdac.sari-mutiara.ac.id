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
        window.location.href = `agenda-details?judul=${title}`
    }

    handleRoutePengumuman(id: string): void {
        let title = id.toLowerCase().replace(/\s/g, '-');
        window.location.href = `pengumuman-details?judul=${title}`
    }

    handleLihatSemuaAgenda(): void {
        window.location.href = 'agenda'
    }

    handleLihatSemuaPengumuman(): void {
        window.location.href = 'pengumuman'
    }

    onFormatDateAgenda(tanggal: string): any {
        return new Date(tanggal);
    }
}
