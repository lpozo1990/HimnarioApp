import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: any[], text: string): any[] {
    if (text === '') {
      return list;
    }
    text = text.toLowerCase();
    return list.filter(item => {
      return item.title.toLowerCase()
        .includes(text);
    });

  }

}
