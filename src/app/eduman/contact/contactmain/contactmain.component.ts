import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-contactmain',
    templateUrl: './contactmain.component.html',
    styleUrls: ['./contactmain.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ContactmainComponent implements OnInit {

    Identitas: any;

    constructor(
        private _coreService: CoreService,
    ) { }

    ngOnInit(): void {
        this._coreService.Loading$.next(true);

        this._coreService.getIdentitas().subscribe((result) => {
            if (result.status) {
                this.Identitas = result.data;

                setTimeout(() => {
                    this._coreService.Loading$.next(false);
                }, 1000);
            }
        })
    }
}
