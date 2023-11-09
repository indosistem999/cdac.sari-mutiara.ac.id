import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation]);

@Component({
    selector: 'app-gallerysection',
    templateUrl: './gallerysection.component.html',
    styleUrls: ['./gallerysection.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class GallerysectionComponent implements OnInit {

    Gallery: any[] = [];

    constructor(
        private _router: Router,
        private _coreService: CoreService
    ) { }

    ngOnInit(): void {
        this._coreService.getGallery().subscribe((result) => {
            if (result.status) {
                this.Gallery = result.data;
            }
        })
    }

    handleRoute(data: any): void {
        let title = data.judul.toLowerCase().replace(/\s/g, '-');
        localStorage.setItem('_USILPGD_', JSON.stringify(data));
        this._router.navigate(['/gallery-details'], { queryParams: { judul: title } });
    }

}
