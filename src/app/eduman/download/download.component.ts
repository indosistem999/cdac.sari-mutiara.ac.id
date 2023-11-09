import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-download',
    templateUrl: './download.component.html',
    styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

    Testimoni: any[] = [];

    Kategori: any[] = [];
    SelectedKategori: any = "";
    Search = "";

    Length = 0;
    PageSize = 6;
    PageNumber = 1;

    constructor(
        private _router: Router,
        private _coreService: CoreService,
    ) { }

    ngOnInit(): void {
        this._coreService.getDownload(1000, 1, "", "").subscribe((result) => {
            if (result.status) {
                this.Length = result.data.length;
            }
        })

        this._coreService.getDownload(6, 1, "", "").subscribe((result) => {
            if (result.status) {
                this.Testimoni = result.data;
            }
        })

        this._coreService.getDownloadKategori().subscribe((result) => {
            if (result.status) {
                this.Kategori = result.data.sort((a: any, b: any) => { return b.urutan - a.urutan });
            }
        })
    }

    handleChangeKategori(args: any): void {
        this.SelectedKategori = args.target.value;

        this._coreService.getDownload(6, 1, this.Search, this.SelectedKategori).subscribe((result) => {
            if (result.status) {
                this.Testimoni = result.data;
            }
        })
    }

    handleSearchClientSide(value: string): void {
        setTimeout(() => {
            this.Search = value;
            this._coreService.getDownload(6, 1, this.Search, this.SelectedKategori).subscribe((result) => {
                if (result.status) {
                    this.Testimoni = result.data;
                }
            })
        }, 1000);
    }

    handlePageChange(args: any): void {
        this._coreService.getDownload(6, args).subscribe((result) => {
            if (result.status) {
                this.Testimoni = result.data;
            }
        })
    }

    handleOpenFile(url: string): void {
        window.open(url);
    }
}
