import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-blogtags',
    templateUrl: './blogtags.component.html',
    styleUrls: ['./blogtags.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BlogtagsComponent implements OnInit {

    @Input('tags') tags: any[] = []

    constructor() { }

    ngOnInit(): void {
    }

}
