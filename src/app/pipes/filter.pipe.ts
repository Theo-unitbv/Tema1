import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../models/card.model';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(items: Card[], filter: string): any {
    if (!items || !filter) return items;
    return items.filter((item) => item.title.indexOf(filter) !== -1);
  }
}
