import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {


  // write ones and use multiple time 

  transform(value: any, ...args: any): any{

    console.log(value);
    console.log(args);

  // return value*value  ;
  return value * args ;


   
   


  

  }

}