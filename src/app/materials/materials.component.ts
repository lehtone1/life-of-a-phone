import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';


@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  
  questions: Question[] = [
    new Question('ALUMINIUM', 
    ["To obtain it, miners remove all the soil that covers the aluminum, a process called strip mining.", "It comes from bauxite, so in order to get 1 ton of aluminum, 4 tons of bauxite have to be extracted, creating a lot of waste.", "An iPhone contains 31.14gr of aluminum, used for the case, battery and screen. It is responsible for 30% of Apple's footprint.", "Since the mining process is so invasive, aluminum extraction can lead to natural landscape distruction, and hazardous working conditions."], 'http://via.placeholder.com/250x150', 'choice1'),
    new Question('COBALT', ["It is extracted mostly by human force, digging extensively using hand tools and then sold to big mining companies.", "An iPhone contains 6.59gr of cobalt, used for the battery mainly.", "Mining operations often lack of safety and health measures, putting workers in extreme danger (breathing problems, injuries, etc)"], 'http://via.placeholder.com/250x150', 'choice2'),
    new Question('TIN', ["Its biggest source is in Potosì, Bolivia. Workers also dig for silver, zinc, and other lead ores that will later be sold to bigger companies.", "An iPhone contains 0.66gr of tin, used for screens, but also plays a big part in soldering.", "The height make working conditions inhumane, having to deal with extreme temperatures, inadequate equipment, resulting in severe health problems, or death."]
    , 'http://via.placeholder.com/250x150', 'choice3'),
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
    window.results = {"materials": this.lastID}
  }



  mouseEnter(id) {
    /* document.getElementById(id).style.display = "inline" */

  }
  
  mouseLeave(id) {
    /* document.getElementById(id).style.display = "none" */
  }

  constructor() { }

  ngOnInit() {
  }

}
