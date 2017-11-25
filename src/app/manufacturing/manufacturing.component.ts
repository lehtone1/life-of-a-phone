import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-manufacturing',
  templateUrl: './manufacturing.component.html',
  styleUrls: ['./manufacturing.component.css']
})
export class ManufacturingComponent implements OnInit {

  questions: Question[] = [
    new Question('China', ["Cheap", "Flexible – big amount of workers with high productivity", "Many natural resources ", "Energy use: Coal 57%", "Ethical questions"], 'http://via.placeholder.com/250x150', 'choice1'),
    new Question('India', ["Cheap","2nd largest smartphone market","Competitors selling","cheaper phones","Energy use: Coal 58%"], 'http://via.placeholder.com/250x150', 'choice2'),
    new Question('USA', ["Sustainable energy generation", "High cost", "Quality compromised", "Engineer shortage"], 'http://via.placeholder.com/250x150', 'choice3'),
  ]

  public lastID = ""

  boxClicked(id) {

    if (document.getElementById("endResult").style.display == "none") {
      document.getElementById("endResult").style.display = "block"
    } 

    document.getElementById(id + "-details").style.display = "block"

    if (this.lastID != "") {
      document.getElementById(this.lastID).style.display = "none"
    }

    this.lastID = id + "-details"

  }

  nextPage() {
    window.results = {"manufacturing": this.lastID}
  }


  constructor() { }

  ngOnInit() {
  }

}
