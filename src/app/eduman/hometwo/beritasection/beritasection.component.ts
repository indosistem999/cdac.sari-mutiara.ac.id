import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';
// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation]);

@Component({
    selector: 'app-beritasection',
    templateUrl: './beritasection.component.html',
    styleUrls: ['./beritasection.component.scss']
})
export class BeritasectionComponent implements OnInit {

    Berita: any[] = [];

    constructor(
        private _router: Router,
        private _coreService: CoreService
    ) { }

    ngOnInit(): void {
        this._coreService.getBerita(9, 1, "").subscribe((result) => {
            if (result.status) {
                this.Berita = result.data;
            }
        })
    }

    handleRoute(id: string): void {
        window.location.href = `blog-details?id=${id}`
    }
}
