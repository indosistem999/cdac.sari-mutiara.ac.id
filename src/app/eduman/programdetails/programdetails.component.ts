import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-programdetails',
    templateUrl: './programdetails.component.html',
    styleUrls: ['./programdetails.component.scss']
})
export class ProgramdetailsComponent implements OnInit, AfterViewInit {

    Detail: any;

    constructor(
        private _coreService: CoreService,
        private _activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        const id = this._activatedRoute.snapshot.queryParams['id'];
        this.getDetail(id);
    }

    private getDetail(id: string) {
        this._coreService.getDetailProgram(id).subscribe((result) => {
            if (result.status) {
                this.Detail = result.data;
            }
        })
    }

}
