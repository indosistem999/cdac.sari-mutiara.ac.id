import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-mobilemenu-two',
    templateUrl: './mobilemenu-two.component.html',
    styleUrls: ['./mobilemenu-two.component.scss']
})
export class MobilemenuTwoComponent implements OnInit {

    Menu: any[] = [];

    constructor(
        private _router: Router,
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
                this._router.navigate(['/halaman'], { queryParams: { page: args.slug } });
            } else if (args.jenis_menu == 'Program') {
                localStorage.setItem('_USILPPG_', JSON.stringify({ id: args.id_konten }));
                this._router.navigate(['/program-details'], { queryParams: { judul: args.slug } });
            } else if (args.jenis_menu == 'KategoriBerita') {
                this._router.navigate(['/blog'], { queryParams: { kategori: args.id_konten } });

            } else {
                this._router.navigate([`/${args.id_konten}`]);
            }
        }
    }
}
