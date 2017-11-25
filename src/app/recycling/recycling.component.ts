import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-recycling',
  templateUrl: './recycling.component.html',
  styleUrls: ['./recycling.component.css']
})
export class RecyclingComponent implements OnInit {

  questions: Question[] = [new Question("Smelting and metal refining", ["Quite efficient, but can’t dismantle all parts"], "", "choice1"),
  new Question("Apple’s autonomous disassembly system Liam", ["Can disassemble 1.2 million iPhone units per year"], "", "choice2"),
  new Question("Shredding and sorting", ["More effective when less materials and components, older iPhones", "Most enviroment friendly option"], "", "choice3")]


  public lastID = ""
  
  
  boxClicked(id) {
    window.results = {"materials": id}
    console.log(window.results);

    if (document.getElementById("endResult").style.display == "none") {
      document.getElementById("endResult").style.display = "block"
    } 

    document.getElementById(id + "-details").style.display = "block"

    if (this.lastID != "") {
      document.getElementById(this.lastID).style.display = "none"
    }

    this.lastID = id + "-details"

  }

  constructor() { }

  ngOnInit() {
  }


}
