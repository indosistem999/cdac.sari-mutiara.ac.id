import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-categorymenu',
    templateUrl: './categorymenu.component.html',
    styleUrls: ['./categorymenu.component.scss']
})
export class CategorymenuComponent implements OnInit {

    Layanan: any[] = [];

    constructor(
        private _coreService: CoreService
    ) { }

    ngOnInit(): void {
        this._coreService.getLayanan().subscribe((result) => {
            if (result.status) {
                this.Layanan = result.data;
            }
        })
    }
}
