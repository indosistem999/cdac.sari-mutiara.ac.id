import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-faqmain',
    templateUrl: './faqmain.component.html',
    styleUrls: ['./faqmain.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FaqmainComponent implements OnInit {

    @Input('forSection') forSection = false;

    Kategori: any[] = [];

    Faq: any[] = [];

    Active: string = "";

    constructor(
        private _coreService: CoreService
    ) { }

    ngOnInit(): void {
        this._coreService.Loading$.next(true);

        this.getKategori();
        this.getFaq();
    }

    getKategori(): void {
        this._coreService.getKategoriFaq().subscribe((result) => {
            if (result.status) {
                this.Kategori = result.data;
            }
        })
    }

    getFaq(): void {
        this._coreService.getAllFaq().subscribe((result) => {
            if (result.status) {
                this.Faq = result.data[0].faq;
                setTimeout(() => {
                    this._coreService.Loading$.next(false);
                }, 1000);
            }
        })
    }

    handleClickFaq(item: any): void {
        this.Active = item.urutan;
    }

    handleClickKategori(id: string): void {
        this._coreService.getFaqByKategori(id).subscribe((result) => {
            if (result.status) {
                this.Faq = result.data.sort((a: any, b: any) => {
                    return b.urutan - a.urutan
                });
            }
        })
    }
}
