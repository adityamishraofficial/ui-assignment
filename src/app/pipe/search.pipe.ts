import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args: any): any {
    let response;
    if (args === undefined || args === null || args === '') {
      response = value;
    } else {
      const search = new RegExp(args, 'i'); // prepare a regex object
      response = value.filter(item => search.test(item.name));
    }
    return response;
  }

}
