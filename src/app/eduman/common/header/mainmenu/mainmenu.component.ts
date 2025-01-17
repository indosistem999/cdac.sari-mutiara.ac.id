import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
    selector: 'app-mainmenu',
    templateUrl: './mainmenu.component.html',
    styleUrls: ['./mainmenu.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MainmenuComponent implements OnInit {

    FakeMenu: any[] = [
        {
            title: 'Tentang Kami',
            child: [
                {
                    title: 'Sambutan Rektor',
                    path: '/course'
                },
                {
                    title: 'Visi & Misi',
                    path: '/course'
                },
                {
                    title: 'Tugas & Fungsi',
                    path: '/course'
                },
                {
                    title: 'Manajemen',
                    path: '/course',
                    child: [
                        {
                            title: 'Majelis Wali Amanat',
                            path: '/course'
                        },
                        {
                            title: 'Senat Akademik',
                            path: '/course'
                        },
                        {
                            title: 'Dewan Guru Besar',
                            path: '/course'
                        },
                        {
                            title: 'Pemimpin Universitas',
                            path: '/course'
                        },
                        {
                            title: 'Struktur Organisasi',
                            path: '/course'
                        },
                    ]
                },
                {
                    title: 'Sejarah',
                    path: '/course'
                },
                {
                    title: 'Makna Lambang',
                    path: '/course'
                },
                {
                    title: 'Panduan Identitas Visual',
                    path: '/course'
                },
                {
                    title: 'Himne USI',
                    path: '/course'
                },
                {
                    title: 'Peta Kampus',
                    path: '/course'
                },
            ]
        },
        {
            title: 'Berita',
            child: [
                {
                    title: 'Pendidikan',
                    path: '/course'
                },
                {
                    title: 'Prestasi',
                    path: '/course'
                },
                {
                    title: 'Penelitian & Inovasi',
                    path: '/course'
                },
                {
                    title: 'Seputar Kampus',
                    path: '/course'
                },
                {
                    title: 'Liputan',
                    path: '/course'
                },
                {
                    title: 'Cek Fakta',
                    path: '/course'
                },
            ]
        },
        {
            title: 'Pendidikan',
            child: [
                {
                    title: 'Fakultas Keguruan & Ilmu Pendidikan',
                    path: '/course'
                },
                {
                    title: 'Fakultas Ekonomi',
                    path: '/course'
                },
                {
                    title: 'Fakultas Hukum',
                    path: '/course'
                },
                {
                    title: 'Fakultas Pertanian',
                    path: '/course'
                },
                {
                    title: 'Fakultas Teknik',
                    path: '/course'
                },
            ]
        },
        {
            title: 'Mahasiswa',
            child: [
                {
                    title: 'Kreativitas Mahasiswa',
                    path: '/course'
                },
                {
                    title: 'Pengembangan Karakter',
                    path: '/course'
                },
                {
                    title: 'Organisasi & Fasilitas',
                    path: '/course'
                },
                {
                    title: 'Kesejahteraan Mahasiswa',
                    path: '/course'
                },
                {
                    title: 'Beasiswa',
                    path: '/course'
                },
            ]
        },
        {
            title: 'Penelitian',
            child: [
                {
                    title: 'Publikasi',
                    path: '/course'
                },
                {
                    title: 'Pengembangan Usaha',
                    path: '/course'
                },
                {
                    title: 'Pusat Study',
                    path: '/course'
                },
                {
                    title: 'Kepakaran Riset & Tema',
                    path: '/course',
                    child: [
                        {
                            title: 'Kepakaran Berdasar Riset',
                            path: '/course',
                        },
                        {
                            title: 'Proyek Riset',
                            path: '/course',
                        }
                    ]
                },
            ]
        },
        {
            title: 'Pengabdian',
            child: [
                {
                    title: 'KKN PPM',
                    path: '/course'
                },
                {
                    title: 'Program Desa Binaan',
                    path: '/course'
                },
                {
                    title: 'Teknologi Tepat Guna',
                    path: '/course'
                },
                {
                    title: 'Pendidikan untuk Pembangunan Berkelanjutan',
                    path: '/course',
                },
                {
                    title: 'Disaster Respon Unit',
                    path: '/course',
                },
                {
                    title: 'Pendamping UMKM',
                    path: '/course',
                },
                {
                    title: 'RCE Summer Course',
                    path: '/course',
                },
            ]
        },
        {
            title: 'Pendaftaran',
            child: [
                {
                    title: 'Sarjana',
                    path: '/course'
                },
                {
                    title: 'Sarjana Terapan',
                    path: '/course'
                },
                {
                    title: 'Pasca Sarjana',
                    path: '/course'
                },
                {
                    title: 'Profesi',
                    path: '/course',
                },
                {
                    title: 'Program Internasional',
                    path: '/course',
                },
            ]
        },
    ];

    Menu: any[] = [];

    constructor(
        private _router: Router,
        private _coreService: CoreService,
    ) { }

    ngOnInit(): void {
        this._coreService.getMenu().subscribe((result) => {
            if (result.status) {
                this.Menu = this.sortArrayAndChildren(result.data);
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
