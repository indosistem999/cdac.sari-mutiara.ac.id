import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PaginationComponent implements OnInit, AfterViewInit {

    dataLength: number = 0;

    @Input('length') set length(val: number) {
        this.dataLength = val;
    };

    get length() {
        return this.dataLength;
    }

    @Input('pageSize') pageSize: number = 0;
    @Input('pageNumber') pageNumber: number = 0;

    Pagination: any[] = [];

    CurrentPage: number = 1;

    @Output('onPageChange') onPageChange = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            console.log("LENGTH =>", this.length);
            console.log("PAGE SIZE =>", this.pageSize);
            console.log("PAGE NUMBER =>", this.pageNumber);

            console.log("JUMLAH PAGINATION =>", Math.ceil(this.length / this.pageSize));

            for (let i = 0; i < Math.ceil(this.length / this.pageSize); i++) {
                this.Pagination.push(i + 1);
            }
        }, 1000);
    }

    onActionPagination(type: 'prev' | 'next'): void {
        if (type == 'prev') {
            if (this.CurrentPage > 1) {
                this.CurrentPage -= 1;
                this.handlePageChange(this.CurrentPage);
            }
        } else {
            if (this.CurrentPage < this.length) {
                this.CurrentPage += 1;
                this.handlePageChange(this.CurrentPage);
            }
        }
    }

    handlePageChange(index: number): void {
        this.CurrentPage = index;

        this.onPageChange.emit({
            pageNumber: index
        });
    }
}
