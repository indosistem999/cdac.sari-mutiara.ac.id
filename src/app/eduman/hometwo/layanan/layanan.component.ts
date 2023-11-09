import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation]);

@Component({
    selector: 'app-layanan',
    templateUrl: './layanan.component.html',
    styleUrls: ['./layanan.component.scss']
})
export class LayananComponent implements OnInit {

    Layanan: any[] = [];

    constructor(
        private _router: Router,
        private _coreService: CoreService
    ) { }

    ngOnInit(): void {
        this._coreService.getLayanan().subscribe((result) => {
            if (result.status) {
                this.Layanan = result.data;
            }
        })
    }

    handleRoute(url: any): void {

    }
}
