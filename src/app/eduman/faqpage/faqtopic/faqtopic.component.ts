import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-faqtopic',
    templateUrl: './faqtopic.component.html',
    styleUrls: ['./faqtopic.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FaqtopicComponent implements OnInit {

    @Input('kategori') kategori: any;
    @Input('forSection') forSection = false;

    @Output('onClick') onClick = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }

    handleClick(args: any): void {
        this.onClick.emit(args.id);
    }
}
