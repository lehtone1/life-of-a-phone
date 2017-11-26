import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  showVideo() {
    document.getElementById('placeholder').style.display = 'none'
    document.getElementById('iframe').style.display = 'block'
    document.getElementById('iframe').src += "?autoplay=1";
    
  }

  constructor() { }

  ngOnInit() {
  }

  toggle_class() {
    
  }

}
