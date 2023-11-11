import { AfterViewInit, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-contactsidebar',
    templateUrl: './contactsidebar.component.html',
    styleUrls: ['./contactsidebar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ContactsidebarComponent implements OnInit, AfterViewInit {

    @Input('Identitas') Identitas: any;

    Kontak: any[] = [];

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.Kontak = [
                {
                    id: 'wa',
                    icon: 'fab fa-whatsapp',
                    title: 'Whatsapp',
                    value: this.Identitas?.wa,
                    url: '',
                },
                {
                    id: 'telegram',
                    icon: 'fab fa-telegram',
                    title: 'Telegram',
                    value: this.Identitas?.telegram,
                    url: '',
                },
                {
                    id: 'fb',
                    icon: 'fab fa-facebook',
                    title: 'Facebook',
                    value: this.Identitas?.fb,
                    url: `https://www.facebook.com/${this.Identitas?.fb}`,
                },
                {
                    id: 'ig',
                    icon: 'fab fa-instagram',
                    title: 'Instagram',
                    value: this.Identitas?.ig,
                    url: `https://www.instagram.com/${this.Identitas?.ig}`,
                },
                {
                    id: 'email',
                    icon: 'fas fa-envelope',
                    title: 'Email',
                    value: this.Identitas?.email,
                    url: `mailto:${this.Identitas?.email}`,
                },
                {
                    id: 'youtube',
                    icon: 'fab fa-youtube',
                    title: 'Youtube',
                    value: this.Identitas?.yt,
                    url: `https://www.youtube.com/${this.Identitas?.yt}`,
                },
                {
                    id: 'tiktok',
                    icon: 'fab fa-tiktok',
                    title: 'Tiktok',
                    value: this.Identitas?.tiktok,
                    url: `https://www.tiktok.com/${this.Identitas?.tiktok}`,
                },
                {
                    id: 'twitter',
                    icon: 'fab fa-twitter',
                    title: 'Twitter',
                    value: this.Identitas?.tw,
                    url: `https://www.twitter.com/${this.Identitas?.tw}`,
                },
            ];
        }, 500);
    }
}
