import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-testimoni',
    templateUrl: './testimoni.component.html',
    styleUrls: ['./testimoni.component.scss']
})
export class TestimoniComponent implements OnInit {

    Testimoni: any[] = [];

    constructor(
        private _router: Router,
        private _coreService: CoreService,
    ) { }

    ngOnInit(): void {
        this._coreService.getTestimoni().subscribe((result) => {
            if (result.status) {
                this.Testimoni = result.data;
            }
        })
    }

    handleRoute(id: string): void {
        let title = id.toLowerCase().replace(/\s/g, '-');
        this._router.navigate(['/testimoni-details'], { queryParams: { judul: title } });
    }

    // handlePageChange(args: any): void {
    //     this._coreService.getBerita(this.PageSize, args, "").subscribe((result) => {
    //         if (result.status) {
    //             this.Berita = result.data;
    //         }
    //     })
    // }

}
