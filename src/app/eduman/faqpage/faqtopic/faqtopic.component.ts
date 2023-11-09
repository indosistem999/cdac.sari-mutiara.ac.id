import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-faqtopic',
    templateUrl: './faqtopic.component.html',
    styleUrls: ['./faqtopic.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FaqtopicComponent implements OnInit {

    @Input('kategori') kategori: any;

    @Output('onClick') onClick = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }

    handleClick(args: any): void {
        this.onClick.emit(args.id);
    }
}
