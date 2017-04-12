import { Pipe, PipeTransform } from '@angular/core';
import { Member } from "./member.model";


@Pipe({
  name: 'ranking',
  pure: false
})

export class RankingPipe implements PipeTransform {

  transform(input: Member[], checkRank){
    var output: Member[] = [];
    if(input){
      console.log(input);
      if(checkRank === "admin"){
        for(var i = 0; i < input.length; ++i){
          if(input[i].ranking === "admin"){
            output.push(input[i]);
          }
        }
        return output;
      }
       else if (checkRank === "member"){
        for(var i = 0; i < input.length; ++i){
          if(input[i].ranking === "member"){
            output.push(input[i]);
          }
        }
        return output;
      }
      else if (checkRank === "president"){
       for(var i = 0; i < input.length; ++i){
         if(input[i].ranking === "president"){
           output.push(input[i]);
         }
       }
       return output;
     } else {
       return input;
     }
    }
  }
}
