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
      /* You can search both by id and by name of the anthem */
      return item.title.toLowerCase()
        .includes(text) /* By name */ || 
        
        item.id.toString().toLowerCase()
        .includes(text) /* And by Id */ ;
    });
    

  }

}