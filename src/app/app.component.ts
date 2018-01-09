import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app works!';
  
   move() {
    let elem = document.getElementById("myBar"); 
    let width = 1;
     setInterval(()=>{
      {
        if (width < 100)  {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
    }, 10);

}
































}

