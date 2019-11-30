import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Options} from 'ng5-slider';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output('filterPrice') filterPrice = new EventEmitter();
    value = 100;
  highValue = 1000;
  options: Options = {
    floor: 100,
    ceil: 1000
  };

  constructor() { }

  ngOnInit() {
  }

  onFilterPrice() {
    const ValueObj = {
      minPrice: this.value,
      maxPrice: this.highValue
    };
    this.filterPrice.emit(ValueObj);
  }
}
