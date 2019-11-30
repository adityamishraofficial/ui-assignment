import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {

    if (args === undefined || args === null || args['minPrice'] === 100 && args['maxPrice'] === 1000) {
      return value;
    } else {
      let filterValue = [];
      for (const item of value) {
        if (item.price >= args['minPrice'] && item.price > args['maxPrice']) {
          filterValue.push(item);
        }
      }
      return filterValue;
    }
  }

}
