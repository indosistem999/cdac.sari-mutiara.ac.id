import {
    animate,
    keyframes,
    style,
    transition,
    trigger,
} from '@angular/animations';
import {
    Component,
    Output,
    EventEmitter,
    OnInit,
    HostListener,
    ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { fadeInOut, INavbarData } from './helper';
import { Menu, navbarData } from './nav-data';
import { CoreService } from 'src/app/services/core.service';

interface SideNavToggle {
    screenWidth: number;
    collapsed: boolean;
}

@Component({
    selector: 'app-mobilemenu',
    templateUrl: './mobilemenu.component.html',
    styleUrls: ['./mobilemenu.component.scss'],
    animations: [
        fadeInOut,
        trigger('rotate', [
            transition(':enter', [
                animate(
                    '1000ms',
                    keyframes([
                        style({ transform: 'rotate(0deg)', offset: '0' }),
                        style({ transform: 'rotate(2turn)', offset: '1' }),
                    ])
                ),
            ]),
        ]),
    ],
    encapsulation: ViewEncapsulation.None
})
export class MobilemenuComponent implements OnInit {

    @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
    collapsed = false;
    screenWidth = 0;

    navData: any[] = [];
    Menu: any[] = [];

    multiple: boolean = false;

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth <= 768) {
            this.collapsed = false;
            this.onToggleSideNav.emit({
                collapsed: this.collapsed,
                screenWidth: this.screenWidth,
            });
        }
    }

    constructor(
        public _router: Router,
        private _coreService: CoreService,
    ) { }

    ngOnInit(): void {
        this.screenWidth = window.innerWidth;

        this._coreService.getMenu().subscribe((result) => {
            if (result.status) {
                this.navData = this.sortArrayAndChildren(result.data);

                this.navData = this.navData.map((item) => {
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

    handleClick(item: INavbarData): void {
        console.log(item);

        this.shrinkItems(item);
        item.expanded = !item.expanded;
    }

    getActiveClass(data: INavbarData): string {
        return this._router.url.includes(data.routeLink) ? 'active' : '';
    }

    shrinkItems(item: INavbarData): void {
        if (!this.multiple) {
            for (let modelItem of this.navData) {
                if (item !== modelItem && modelItem.expanded) {
                    modelItem.expanded = false;
                }
            }
        }
    }

    onClickMenu(args: any, utama?: any): any {
        const payload = {
            utama: utama ? utama : [],
            item: args
        };

        if (args.jenis_menu == 'Halaman') {
            localStorage.setItem('_USILPPG_', JSON.stringify(payload));
            // window.location.replace(`halaman?page=${args.slug}`);
            this._router.navigate(['/halaman'], { queryParams: { page: args.slug } });

        }
        else if (args.jenis_menu == 'Program') {
            // window.location.replace(`program`);
            this._router.navigate(['/program']);
        }
        else if (args.jenis_menu == 'KategoriBerita') {
            // window.location.replace(`blog?kategori=${args.id_konten}`);
            this._router.navigate(['/blog'], { queryParams: { kategori: args.id_konten } });

        }
        else {
            // window.location.replace();
            this._router.navigate([`/${args.id_konten}`]);
        }


    }
}
