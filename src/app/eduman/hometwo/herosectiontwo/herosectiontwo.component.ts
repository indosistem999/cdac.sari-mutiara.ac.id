import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CoreService } from 'src/app/services/core.service';
// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation]);

@Component({
    selector: 'app-herosectiontwo',
    templateUrl: './herosectiontwo.component.html',
    styleUrls: ['./herosectiontwo.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HerosectiontwoComponent implements OnInit, OnDestroy {

    Destroy$ = new Subject();

    Slider: any[] = [];

    SelectedSlider: any;
    CurrentSliderIndex = 0;

    constructor(
        private _coreService: CoreService
    ) { }

    ngOnInit(): void {
        this.getSlider();
    }

    getSlider(): void {
        this._coreService.getSlider()
            .pipe(takeUntil(this.Destroy$))
            .subscribe((result) => {
                this.Slider = result.status ? result.data : [];

                console.log(this.Slider);

                // this.SelectedSlider = result.status ? result.data[0] : null;
            });
    }

    onActionSlider(type: 'next' | 'prev', index: number) {
        if (type == 'prev') {
            if (index > 0) {
                this.CurrentSliderIndex -= 1;
            }
        } else {
            if (index < this.Slider.length - 1) {
                this.CurrentSliderIndex += 1;
            }
        }

        this.SelectedSlider = this.Slider[this.CurrentSliderIndex];
    }

    onClickSlider(item: any): void {
        if (item.url) {
            window.open(item.url)
        }
    }

    ngOnDestroy(): void {
        this.Destroy$.next(1);
        this.Destroy$.complete();
    }
}
