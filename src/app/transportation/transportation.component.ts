import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.css']
})
export class TransportationComponent implements OnInit {


  questions: Question[] = [
    new Question('SHIPPING', ["Shipping is considered one of the less harming means of transportation when it comes to pollution because of the large quantity of products that can shipped every time. Currently, it's responsible for 90% of the world's traded goods.",
    "However, it still produces large amounts of greenhouse gasses such as carbon dioxide, causing air pollution. Water pollution can happen because of accidental oil spills while loading at the port, for example. Ports and maintenance sites have to be built for them to function properly as well."], 'http://via.placeholder.com/250x150', 'choice1'),
    new Question('AIR TRANSPORTATION', ["Air transportation is fast but the amount of cargo a plane can carry is limited. This makes air transportation more expensive than the other alternatives.",
    "Airplanes emit relatively large amounts of greenhouse gases for the small amount of cargo they can carry. They also reduce the air quality and create noise pollution in cities with airports."], 'http://via.placeholder.com/250x150', 'choice2'),
    new Question('RAIL', ["Trains are the most environmentally friendly choice for moving goods over long distances. Trains are the greenest choice of the three alternatives here in terms of greenhouse gases they emit.",
    "However, trains can only go where tracks have been built. A train track going through a forest splits habitats of animals into two which can cause significant harm to adjacent ecosystems."]
    , 'http://via.placeholder.com/250x150', 'choice3')
  ]

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

  /* mouseEnter(id) {
    document.getElementById(id).style.display = "inline"

  }
  
  mouseLeave(id) {
    document.getElementById(id).style.display = "none"
  } */


  constructor() { }

  ngOnInit() {
  }

}
