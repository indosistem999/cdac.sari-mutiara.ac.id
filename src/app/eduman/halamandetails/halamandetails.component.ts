import { Component, Sanitizer, SecurityContext, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Component({
    selector: 'app-halamandetails',
    templateUrl: './halamandetails.component.html',
    styleUrls: ['./halamandetails.component.scss'],
})
export class HalamandetailsComponent {

    Detail: any;

    PageName: any;

    PageDetail = localStorage.getItem('_USILPPG_') ? JSON.parse(localStorage.getItem('_USILPPG_') as any) : null;

    Content: any;

    constructor(
        private _sanitize: DomSanitizer,
        private _coreService: CoreService,
        private _activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            if (this.PageDetail) {
                this.PageName = this.PageDetail.item.nama_menu;
                this.getDetail(this.PageDetail.item.id_konten);
            }
        }, 100);
    }

    private getDetail(id: string) {
        this._coreService.getContent(id).subscribe((result) => {
            if (result.status) {
                this.Detail = result.data;
                this.Content = this._sanitize.bypassSecurityTrustHtml(this.Detail.isi);
            }
        })
    }

    getSafeContent(content: any) {
        const htmlContent = content;
        return this._sanitize.sanitize(SecurityContext.HTML, htmlContent);
    }
}
