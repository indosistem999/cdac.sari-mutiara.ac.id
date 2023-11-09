import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CoreService {

    Header: HttpHeaders;

    Loading$ = new BehaviorSubject(true);

    constructor(
        private _httpClient: HttpClient,
    ) {
        this.Header = new HttpHeaders().append('Authorization', `Bearer ${environment.token}`)
    }

    getIdentitas(): Observable<any> {
        return this._httpClient.get<any>(`${environment.endpoint}/identitas`, {
            headers: this.Header
        });
    }

    getSlider(): Observable<any> {
        return this._httpClient.get<any>(`${environment.endpoint}/slider`, {
            headers: this.Header
        });
    }

    getBerita(pageSize: number, pageNumber: number, search?: string): Observable<any> {
        const params: any = {
            page_size: pageSize ? pageSize : 4,
            page_number: pageNumber,
            search: search,
        };

        return this._httpClient.get<any>(`${environment.endpoint}/berita`, {
            headers: this.Header,
            params: params
        });
    }

    getBeritaByKategori(pageSize: number, pageNumber: number, search?: string, seo_kategori?: string): Observable<any> {
        const params: any = {
            page_size: pageSize ? pageSize : 4,
            page_number: pageNumber,
            search: search,
            seo_kategori
        };

        return this._httpClient.get<any>(`${environment.endpoint}/berita/kategori`, {
            headers: this.Header,
            params: params
        });
    }

    getDetailBerita(id: string): Observable<any> {
        return this._httpClient.get<any>(`${environment.endpoint}/berita/detail`, {
            headers: this.Header,
            params: {
                id: id
            }
        });
    }

    getProgram(): Observable<any> {
        return this._httpClient.get<any>(`${environment.endpoint}/program`, {
            headers: this.Header,
        });
    }

    getDetailProgram(id: string): Observable<any> {
        return this._httpClient.get<any>(`${environment.endpoint}/program/detail`, {
            headers: this.Header,
            params: {
                id: id
            }
        });
    }

    getMenu(): Observable<any> {
        return this._httpClient.get<any>(`${environment.endpoint}/menu_utama`, {
            headers: this.Header,
        });
    }

    getTopMenu(): Observable<any> {
        return this._httpClient.get<any>(`${environment.endpoint}/menu_top`, {
            headers: this.Header,
        });
    }

    getContent(id: string): Observable<any> {
        return this._httpClient.get<any>(`${environment.endpoint}/halaman`, {
            headers: this.Header,
            params: {
                id: id
            }
        });
    }

    getTestimoni(pageSize?: number, pageNumber?: number): Observable<any> {
        const params: any = {
            page_size: pageSize ? pageSize : 3,
            page_number: pageNumber ? pageNumber : 1,
        };

        return this._httpClient.get<any>(`${environment.endpoint}/testimonial`, {
            headers: this.Header,
            params: params
        });
    }

    getTestimoniDetail(id: string): Observable<any> {
        return this._httpClient.get<any>(`${environment.endpoint}/testimonial/detail`, {
            headers: this.Header,
            params: {
                id: id
            }
        });
    }

    getGallery(): Observable<any> {
        return this._httpClient.get<any>(`${environment.endpoint}/galery_photo`, {
            headers: this.Header,
        });
    }

    getGalleryDetail(id: string): Observable<any> {
        return this._httpClient.get<any>(`${environment.endpoint}/galery_photo/detail`, {
            headers: this.Header,
            params: {
                id: id
            }
        });
    }

    getAllFaq(): Observable<any> {
        return this._httpClient.get<any>(`${environment.endpoint}/faq`, {
            headers: this.Header,
        });
    }

    getKategoriFaq(): Observable<any> {
        return this._httpClient.get<any>(`${environment.endpoint}/faq_kategori`, {
            headers: this.Header
        });
    }

    getFaqByKategori(id: string): Observable<any> {
        return this._httpClient.get<any>(`${environment.endpoint}/faq_by_kategori`, {
            headers: this.Header,
            params: {
                id: id
            }
        });
    }

    getAgenda(pageSize: number, pageNumber: number, search?: string): Observable<any> {
        const params: any = {
            page_size: pageSize ? pageSize : 4,
            page_number: pageNumber,
            search: search,
        };

        return this._httpClient.get<any>(`${environment.endpoint}/agenda`, {
            headers: this.Header,
            params: params
        });
    }

    getAgendaByKategori(pageSize: number, pageNumber: number, search?: string, seo_kategori?: string): Observable<any> {
        const params: any = {
            page_size: pageSize ? pageSize : 4,
            page_number: pageNumber,
            search: search,
            seo_kategori
        };

        return this._httpClient.get<any>(`${environment.endpoint}/agenda/kategori`, {
            headers: this.Header,
            params: params
        });
    }

    getDetailAgenda(id: string): Observable<any> {
        return this._httpClient.get<any>(`${environment.endpoint}/agenda/detail`, {
            headers: this.Header,
            params: {
                id: id
            }
        });
    }

    getPengumuman(pageSize: number, pageNumber: number, search?: string): Observable<any> {
        const params: any = {
            page_size: pageSize ? pageSize : 4,
            page_number: pageNumber,
            search: search,
        };

        return this._httpClient.get<any>(`${environment.endpoint}/pengumuman`, {
            headers: this.Header,
            params: params
        });
    }

    getPengumumanByKategori(pageSize: number, pageNumber: number, search?: string, seo_kategori?: string): Observable<any> {
        const params: any = {
            page_size: pageSize ? pageSize : 4,
            page_number: pageNumber,
            search: search,
            seo_kategori
        };

        return this._httpClient.get<any>(`${environment.endpoint}/pengumuman/kategori`, {
            headers: this.Header,
            params: params
        });
    }

    getDetailPengumuman(id: string): Observable<any> {
        return this._httpClient.get<any>(`${environment.endpoint}/pengumuman/detail`, {
            headers: this.Header,
            params: {
                id: id
            }
        });
    }

    getLayanan(): Observable<any> {
        return this._httpClient.get<any>(`${environment.endpoint}/layanan`, {
            headers: this.Header
        });
    }

    getDownload(pageSize: number, pageNumber: number): Observable<any> {
        const params: any = {
            page_size: pageSize ? pageSize : 4,
            page_number: pageNumber,
        };

        return this._httpClient.get<any>(`${environment.endpoint}/download`, {
            headers: this.Header,
            params: params
        });
    }

    getPrestasi(pageSize: number, pageNumber: number, search?: string): Observable<any> {
        const params: any = {
            page_size: pageSize ? pageSize : 4,
            page_number: pageNumber,
            search: search,
        };

        return this._httpClient.get<any>(`${environment.endpoint}/prestasi`, {
            headers: this.Header,
            params: params
        });
    }

    getPrestasiByKategori(pageSize: number, pageNumber: number, search?: string, seo_kategori?: string): Observable<any> {
        const params: any = {
            page_size: pageSize ? pageSize : 4,
            page_number: pageNumber,
            search: search,
            seo_kategori
        };

        return this._httpClient.get<any>(`${environment.endpoint}/prestasi/kategori`, {
            headers: this.Header,
            params: params
        });
    }

    getDetailPrestasi(id: string): Observable<any> {
        return this._httpClient.get<any>(`${environment.endpoint}/prestasi/detail`, {
            headers: this.Header,
            params: {
                id: id
            }
        });
    }
}
