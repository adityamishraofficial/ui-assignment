import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args: any): any {
    // console.log(args);
    console.log(args);
    let data;
    if (args === 'low-high') {
      data = value.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (args === 'high-low') {
      data = value.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (args === 'discount') {
      data = value.sort((a, b) => parseFloat(b.discount) - parseFloat(a.discount));
    } else {
      data = value;
    }
    return data;
  }

}
