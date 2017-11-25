import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.css']
})
export class UsageComponent implements OnInit {


  questions: Question[] = [new Question("A new model came out and I wanted it", ["One Iphone produces between 50-80 kg Co2", "You could drive a car to Turku with that power"], "", "choice1"),
  new Question("My phone broke", "", "", "choice2"),
  new Question("I haven’t bought a new phone in a while", ["Take care of battery life", "Keep it in generally good condition"], "", "choice4"),]
  
  
  public lastID = ""
  public answered = false
  
  
  
  boxClicked(id) {

    if ( !this.answered) {

      document.getElementById(id + "-details").style.display = "block"
      document.getElementById("choose-button").style.display = "block"
  
      if (this.lastID != "") {
        document.getElementById(this.lastID).style.display = "none"
      }
  
      this.lastID = id + "-details"
  
    }


    }

    

  

  makeDecision() {
    if (!window.results) window.results = {
      
    }
    window.results.usage = this.lastID
    this.answered = true

    document.getElementById("choose-button").style.display = "none"

    if (document.getElementById("endResult").style.display == "none") {
      document.getElementById("endResult").style.display = "block"
    } 
  }

  constructor() { }

  ngOnInit() {
  }

}
