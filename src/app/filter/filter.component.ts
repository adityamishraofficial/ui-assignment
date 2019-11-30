import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

    value = 100;
    highValue = 100000;
  options: Options = {
    floor: 100,
    ceil: 100000
  };

  constructor() { }

  ngOnInit() {
  }

}
