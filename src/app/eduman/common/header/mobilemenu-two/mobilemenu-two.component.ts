import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-mobilemenu-two',
    templateUrl: './mobilemenu-two.component.html',
    styleUrls: ['./mobilemenu-two.component.scss']
})
export class MobilemenuTwoComponent implements OnInit {

    Menu: any[] = [];

    constructor(
        private _coreService: CoreService
    ) { }

    ngOnInit(): void {
        this._coreService.getMenu().subscribe((result) => {
            if (result.status) {
                this.Menu = this.sortArrayAndChildren(result.data);
                this.Menu = this.Menu.map((item) => {
                    return {
                        ...item,
                        expanded: false,
                    }
                });
            }
        })
    }

    sortArrayAndChildren(arr: any) {
        // Sort the main array
        arr.sort((a: any, b: any) => a.urutan - b.urutan);

        // Sort children arrays recursively
        for (const item of arr) {
            if (item.children && item.children.length > 0) {
                item.children = this.sortArrayAndChildren(item.children);
            }
        }

        return arr;
    }

    onClickMenu(args: any, utama?: any): any {
        const payload = {
            utama: utama ? utama : [],
            item: args
        };

        if (args.children) {
            args.expanded = !args.expanded;
        } else {
            if (args.jenis_menu == 'Halaman') {
                localStorage.setItem('_USILPPG_', JSON.stringify(payload));
                window.location.href = `halaman?page=${args.slug}`;
            }
            else if (args.jenis_menu == 'Program') {
                window.location.href = `program`;
            }
            else if (args.jenis_menu == 'KategoriBerita') {
                window.location.href = `blog?kategori=${args.id_konten}`;
            }
            else {
                window.location.href = `${args.id_konten}`;
            }
        }
    }
}
