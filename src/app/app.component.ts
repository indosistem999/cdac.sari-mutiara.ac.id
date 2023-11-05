import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CoreService } from './services/core.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'eduman';

    favIcon: HTMLLinkElement = document.querySelector('#appIcon') as HTMLLinkElement;

    constructor(
        private router: Router,
        private _coreService: CoreService,
    ) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }
}
