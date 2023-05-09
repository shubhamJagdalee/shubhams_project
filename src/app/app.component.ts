import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SAproject';

showFlag:boolean=true;

constructor(private route:Router){

}

  onClickDirective(){
    if(this.showFlag){
    //  this.route.navigate(['directive'])
     this.route.navigateByUrl('directive')
    }
  }
}
