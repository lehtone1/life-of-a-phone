import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-manufacturing',
  templateUrl: './manufacturing.component.html',
  styleUrls: ['./manufacturing.component.css']
})
export class ManufacturingComponent implements OnInit {

  questions: Question[] = [
    new Question('question1', 'bla bla bla and bla and then some bla bla', 'http://via.placeholder.com/250x150', 'choice1'),
    new Question('question2', 'bla bla bla and bla and then some bla bla', 'http://via.placeholder.com/250x150', 'choice2'),
    new Question('question3', 'bla bla bla and bla and then some bla bla', 'http://via.placeholder.com/250x150', 'choice3'),
    new Question('question4', 'bla bla bla and bla and then some bla bla', 'http://via.placeholder.com/250x150', 'choice4')
  ]


  constructor() { }

  ngOnInit() {
  }

}
