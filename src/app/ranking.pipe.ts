import { Pipe, PipeTransform } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Pipe({
  name: 'ranking',
  pure: false
})

export class RankingPipe implements PipeTransform {

  transform(input: any, checkRank){
  
}

}
