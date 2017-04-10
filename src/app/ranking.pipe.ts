import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ranking'
})
export class RankingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
