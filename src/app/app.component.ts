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

    Loading$ = this._coreService.Loading$;

    constructor(
        private router: Router,
        private _coreService: CoreService,
    ) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }

    gotoTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}
