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
}
