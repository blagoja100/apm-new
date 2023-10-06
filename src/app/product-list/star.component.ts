import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: [ './star.component.css' ]
})
export class StarComponent implements OnChanges{
    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5
    }
    @Input() rating: number = 0;
    cropWidth: number = 10;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    
    onClick(): void {
        this.ratingClicked.emit(`The rating value ${this.rating} was clicked.`)
    }
}