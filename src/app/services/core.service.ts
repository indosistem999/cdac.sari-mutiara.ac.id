import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CoreService {

    Header: HttpHeaders;

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

    getContent(id: string): Observable<any> {
        return this._httpClient.get<any>(`${environment.endpoint}/halaman`, {
            headers: this.Header,
            params: {
                id: id
            }
        });
    }

    getTestimoni(): Observable<any> {
        return this._httpClient.get<any>(`${environment.endpoint}/testimonial`, {
            headers: this.Header,
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
}
