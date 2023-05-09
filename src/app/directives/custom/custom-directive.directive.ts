import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor( private elment:ElementRef) {

    this.elment.nativeElement.style.color= "red";

   }

}
