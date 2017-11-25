import { Component, OnInit } from '@angular/core';
const SCORE_MAP = {
  manufacturing: {
    'choice1-details': {
      cost: 1,
      sustainability: 2
    },
    'choice2-details': {
      cost: 2,
      sustainability: 1
    },
    'choice3-details': {
      cost: 3,
      sustainability: 3
    }
  },
  transportation: {
    'choice1-details': {
      cost: 1,
      sustainability: 2
    },
    'choice2-details': {
      cost: 3,
      sustainability: 1
    },
    'choice3-details': {
      cost: 2,
      sustainability: 3
    }
  },
  usage: {
    'choice1-details': {
      cost: 3,
      sustainability: 1
    },
    'choice2-details': {
      cost: 3,
      sustainability: 2
    },
    'choice3-details': {
      cost: 0,
      sustainability: 3
    }
  },
  recycling: {
    'choice1-details': {
      cost: 2,
      sustainability: 2
    },
    'choice2-details': {
      cost: 3,
      sustainability: 3
    },
    'choice3-details': {
      cost: 1,
      sustainability: 1
    }
  }
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(window.results)
    const values = Object.keys(SCORE_MAP).map(key => {
      const choice = window.results[key]
      return SCORE_MAP[key][choice]
    }).filter(v => !!v)

    this.sustainabilityTotal = values.map(value => value.sustainability).reduce((prev, cur) => prev + cur, 0)
    this.costTotal = values.map(value => value.cost).reduce((prev, cur) => prev + cur, 0)

    // document.getElementById('sustainability_result').textContent = sustainabilityTotal
    // document.getElementById('cost_result').textContent = costTotal

  }

}
