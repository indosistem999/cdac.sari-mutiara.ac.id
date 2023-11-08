import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
        private _coreService: CoreService
    ) { }

    ngOnInit(): void {
        this._coreService.getTestimoni().subscribe((result) => {
            if (result.status) {
                this.Testimoni = result.data;
            }
        })
    }

}
