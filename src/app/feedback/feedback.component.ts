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
  public sustainabilityTotal = 0
  public costTotal = 0
  public sustainabilityPct = 0
  public costPct = 0

  ngOnInit() {
    if (!window.results) return
    const values = Object.keys(SCORE_MAP).map(key => {
      const choice = window.results[key]
      return SCORE_MAP[key][choice]
    }).filter(v => !!v)

    this.sustainabilityTotal = values.map(value => value.sustainability).reduce((prev, cur) => prev + cur, 0) || 0
    this.costTotal = values.map(value => value.cost).reduce((prev, cur) => prev + cur, 0) || 0

    this.sustainabilityPct = Math.floor(this.sustainabilityTotal / 12 * 100)
    this.costPct = Math.floor(this.costTotal / 12 * 100)
  }

}
