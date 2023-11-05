import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: '',
        label: 'Home',
        items: [
            {
                routeLink: '/',
                label: 'Home Style 1'
            },
            {
                routeLink: '/home-2',
                label: 'Home Style 2'
            },
            {
                routeLink: '/home-3',
                label: 'Home Style 3'
            }
        ]
    },
    {
        routeLink: '',
        label: 'Courses',
        items: [
            {
                routeLink: '/course',
                label: 'Course Style 1'
            },
            {
                routeLink: '/course-2',
                label: 'Course Style 2'
            },
            {
                routeLink: '/course-3',
                label: 'Course Style 3'
            },
            {
                routeLink: '/course-4',
                label: 'Course Style 4'
            },
            {
                routeLink: '/course-details',
                label: 'Course Details'
            }
        ]
    },
    {
        routeLink: '',
        label: 'Shop',
        items: [
            {
                routeLink: '/shop',
                label: 'Shop'
            },
            {
                routeLink: '/cart',
                label: 'Cart'
            },
            {
                routeLink: '/wishlist',
                label: 'Wishlist'
            },
            {
                routeLink: '/checkout',
                label: 'Checkout'
            },
            {
                routeLink: '/shop-details',
                label: 'Shop Details'
            }
        ]
    },
    {
        routeLink: '',
        label: 'Instructor',
        items: [
            {
                routeLink: '/instructor',
                label: 'Instructors'
            },
            {
                routeLink: '/instructor-profile',
                label: 'Instructor Profile'
            },
            {
                routeLink: '/student-profile',
                label: 'Student Profile'
            },
            {
                routeLink: '/become-instructor',
                label: 'Become Instructor'
            }
        ]
    },
    {
        routeLink: '',
        label: 'Blog',
        items: [
            {
                routeLink: '/blog',
                label: 'Blogs'
            },
            {
                routeLink: '/blog-details',
                label: 'Blog Details'
            },
        ]
    },
    {
        routeLink: '',
        label: 'Zoom',
        items: [
            {
                routeLink: '/zoom-class',
                label: 'Zoom Class'
            },
            {
                routeLink: '/zoom-class-details',
                label: 'Zoom Class Details'
            },
        ]
    },
    {
        routeLink: '',
        label: 'Event',
        items: [
            {
                routeLink: '/event',
                label: 'Events'
            },
            {
                routeLink: '/event-details',
                label: 'Event Details'
            },
        ]
    },
    {
        routeLink: '',
        label: 'Pages',
        items: [
            {
                routeLink: '/about',
                label: 'About'
            },
            {
                routeLink: '/membership',
                label: 'Membership'
            },
            {
                routeLink: '/webinar',
                label: 'Webinars'
            },
            {
                routeLink: '/webinar-details',
                label: 'Webinar Details'
            },
            {
                routeLink: '/faq',
                label: 'Faq'
            },
            {
                routeLink: '/faq-details',
                label: 'Faq Details'
            },
            {
                routeLink: '/404-page',
                label: '404-Page'
            },
            {
                routeLink: '/contact',
                label: 'Contact'
            }
        ]
    }
];

export const Menu: any[] = [
    {
        routeLink: '',
        label: 'Tentang Kami',
        items: [
            {
                label: 'Sambutan Rektor',
                routeLink: '/course'
            },
            {
                label: 'Visi & Misi',
                routeLink: '/course'
            },
            {
                label: 'Tugas & Fungsi',
                routeLink: '/course'
            },
            {
                label: 'Manajemen',
                routeLink: '/course',
                items: [
                    {
                        label: 'Majelis Wali Amanat',
                        routeLink: '/course'
                    },
                    {
                        label: 'Senat Akademik',
                        routeLink: '/course'
                    },
                    {
                        label: 'Dewan Guru Besar',
                        routeLink: '/course'
                    },
                    {
                        label: 'Pemimpin Universitas',
                        routeLink: '/course'
                    },
                    {
                        label: 'Struktur Organisasi',
                        routeLink: '/course'
                    },
                ]
            },
            {
                label: 'Sejarah',
                routeLink: '/course'
            },
            {
                label: 'Makna Lambang',
                routeLink: '/course'
            },
            {
                label: 'Panduan Identitas Visual',
                routeLink: '/course'
            },
            {
                label: 'Himne USI',
                routeLink: '/course'
            },
            {
                label: 'Peta Kampus',
                routeLink: '/course'
            },
        ]
    },
    {
        routeLink: '',
        label: 'Berita',
        items: [
            {
                label: 'Pendidikan',
                routeLink: '/course'
            },
            {
                label: 'Prestasi',
                routeLink: '/course'
            },
            {
                label: 'Penelitian & Inovasi',
                routeLink: '/course'
            },
            {
                label: 'Seputar Kampus',
                routeLink: '/course'
            },
            {
                label: 'Liputan',
                routeLink: '/course'
            },
            {
                label: 'Cek Fakta',
                routeLink: '/course'
            },
        ]
    },
    {
        routeLink: '',
        label: 'Pendidikan',
        items: [
            {
                label: 'Fakultas Keguruan & Ilmu Pendidikan',
                routeLink: '/course'
            },
            {
                label: 'Fakultas Ekonomi',
                routeLink: '/course'
            },
            {
                label: 'Fakultas Hukum',
                routeLink: '/course'
            },
            {
                label: 'Fakultas Pertanian',
                routeLink: '/course'
            },
            {
                label: 'Fakultas Teknik',
                routeLink: '/course'
            },
        ]
    },
    {
        routeLink: '',
        label: 'Mahasiswa',
        items: [
            {
                label: 'Kreativitas Mahasiswa',
                routeLink: '/course'
            },
            {
                label: 'Pengembangan Karakter',
                routeLink: '/course'
            },
            {
                label: 'Organisasi & Fasilitas',
                routeLink: '/course'
            },
            {
                label: 'Kesejahteraan Mahasiswa',
                routeLink: '/course'
            },
            {
                label: 'Beasiswa',
                routeLink: '/course'
            },
        ]
    },
    {
        routeLink: '',
        label: 'Penelitian',
        items: [
            {
                label: 'Publikasi',
                routeLink: '/course'
            },
            {
                label: 'Pengembangan Usaha',
                routeLink: '/course'
            },
            {
                label: 'Pusat Study',
                routeLink: '/course'
            },
            {
                label: 'Kepakaran Riset & Tema',
                routeLink: '/course',
                items: [
                    {
                        label: 'Kepakaran Berdasar Riset',
                        routeLink: '/course',
                    },
                    {
                        label: 'Proyek Riset',
                        routeLink: '/course',
                    }
                ]
            },
        ]
    },
    {
        routeLink: '',
        label: 'Pengabdian',
        items: [
            {
                label: 'KKN PPM',
                routeLink: '/course'
            },
            {
                label: 'Program Desa Binaan',
                routeLink: '/course'
            },
            {
                label: 'Teknologi Tepat Guna',
                routeLink: '/course'
            },
            {
                label: 'Pendidikan untuk Pembangunan Berkelanjutan',
                routeLink: '/course',
            },
            {
                label: 'Disaster Respon Unit',
                routeLink: '/course',
            },
            {
                label: 'Pendamping UMKM',
                routeLink: '/course',
            },
            {
                label: 'RCE Summer Course',
                routeLink: '/course',
            },
        ]
    },
    {
        routeLink: '',
        label: 'Pendaftaran',
        items: [
            {
                label: 'Sarjana',
                routeLink: '/course'
            },
            {
                label: 'Sarjana Terapan',
                routeLink: '/course'
            },
            {
                label: 'Pasca Sarjana',
                routeLink: '/course'
            },
            {
                label: 'Profesi',
                routeLink: '/course',
            },
            {
                label: 'Program Internasional',
                routeLink: '/course',
            },
        ]
    },
]