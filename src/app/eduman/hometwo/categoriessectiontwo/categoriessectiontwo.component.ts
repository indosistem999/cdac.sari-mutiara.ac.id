import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation]);

@Component({
    selector: 'app-categoriessectiontwo',
    templateUrl: './categoriessectiontwo.component.html',
    styleUrls: ['./categoriessectiontwo.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CategoriessectiontwoComponent implements OnInit {

    Testimoni: any[] = [];

    constructor(
        private _router: Router,
        private _coreService: CoreService
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
}
