import { Component } from '@angular/core';
import arrayWords from "../utils/words"
import arrayCountries from "../utils/countries"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  words ="";
  limit = 10;
  limit2= 10;
  ran=0;
  max=195
  show=""
  handleSlideChange(newlimit:number){
    this.limit=newlimit

  }
  generate(){
    this.words = arrayWords.slice(0,this.limit).join(",");
  }
  generatenum(){
    this.ran=Math.floor(Math.random()*Math.floor(this.max));
    this.show=arrayCountries[this.ran];
  }

}
