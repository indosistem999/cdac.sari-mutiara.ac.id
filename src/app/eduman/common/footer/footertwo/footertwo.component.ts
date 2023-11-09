import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-footertwo',
    templateUrl: './footertwo.component.html',
    styleUrls: ['./footertwo.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FootertwoComponent implements OnInit {

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
