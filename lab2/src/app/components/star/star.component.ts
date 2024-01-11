import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit {
  @Input() rating!: number;
  starWidth!: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.rating = 0;
    this.starWidth = (this.rating * 86) / 5;
  }

  onclick(): void {
    this.ratingClicked.emit(`Đánh giá của sản phẩm là ${this.rating} sao`);
  }

  ngOnInit() {
    this.starWidth = (this.rating * 86) / 5;
  }
}
