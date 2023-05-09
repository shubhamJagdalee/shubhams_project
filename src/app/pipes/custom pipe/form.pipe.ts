import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'form'
})
export class FormPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }


  transform(value:any, gender:any ): any{

    if(gender== 'male'){
      return "mr." +''+ value;
    }

    else if(gender=='female'){
      return "miss."+'' + value;

    }
   
   
}
}
