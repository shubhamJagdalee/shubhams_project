import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {


parentData:any= "this is parent data"

}


// parnt to child - 

// parent.ts data > parent.html  [abc]= "data ">child.ts @input() abc:any >  Child.html {{abc}}>  dom