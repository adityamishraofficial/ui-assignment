import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  @Output('sortType') sortType = new EventEmitter();
  currentShortType = '';
  sortValue;
  constructor() { }

  ngOnInit() {
  }

  onSortList(type) {
    this.currentShortType = type;
    this.sortType.emit(type);
  }
}
