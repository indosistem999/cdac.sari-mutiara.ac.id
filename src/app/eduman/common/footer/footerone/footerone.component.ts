import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-footerone',
    templateUrl: './footerone.component.html',
    styleUrls: ['./footerone.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FooteroneComponent implements OnInit {

    Identitas: any;

    Layanan: any[] = [];

    constructor(
        private _coreService: CoreService
    ) { }

    ngOnInit(): void {
        this._coreService.getIdentitas().subscribe((result) => {
            if (result.status) {
                this.Identitas = result.data;
            }
        });

        this._coreService.getLayanan().subscribe((result) => {
            if (result.status) {
                this.Layanan = result.data;
            }
        });

    }
}
