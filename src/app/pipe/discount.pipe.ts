import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: any, args: any): any {
    let number = value * args / 100;
    return value + number;


  }

}
