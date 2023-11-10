import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-hometwomain',
    templateUrl: './hometwomain.component.html',
    styleUrls: ['./hometwomain.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HometwomainComponent implements OnInit {

    Loading$ = this._coreService.Loading$;

    Identitas: any;

    constructor(
        private _coreService: CoreService
    ) { }

    ngOnInit(): void {
        this._coreService.getIdentitas().subscribe((result) => {
            if (result.status) {
                this.Identitas = result.data;
            }
        })
    }

}
