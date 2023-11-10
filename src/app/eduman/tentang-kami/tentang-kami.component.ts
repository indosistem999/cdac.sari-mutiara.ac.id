import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-tentang-kami',
    templateUrl: './tentang-kami.component.html',
    styleUrls: ['./tentang-kami.component.scss']
})
export class TentangKamiComponent implements OnInit {

    Detail: any;
    PageName: any = "Tentang Kami"
    PageDetail: any;

    SideMenu: any[] = [];

    SelectedMenu: any;

    constructor(
        private _coreService: CoreService
    ) { }

    ngOnInit(): void {
        this._coreService.getMenu().subscribe((result) => {
            if (result.status) {
                const data = result.data.find((item: any) => { return item.nama_menu == 'Tentang Kami' });
                this.SideMenu = data ? data.children.sort((a: any, b: any) => { return parseInt(a.urutan) - parseInt(b.urutan) }) : [];
                this.handleClickSideMenu(this.SideMenu[0]);
            }
        })
    }

    handleClickSideMenu(args: any): void {
        this.SelectedMenu = args;

        this._coreService.getContent(args.id_konten).subscribe((result) => {
            this.Detail = result.status ? result.data : null;
        })
    }
}
