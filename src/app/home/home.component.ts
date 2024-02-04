import { Component } from '@angular/core';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public questions: Question[] = [
    {
      index: 0,
      text: 'What does Srija love most?',
      options: ['Gouri', 'Food', 'Abhay'],
      correctAnswer: 'Gouri',
    },
    {
      index: 1,
      text: 'What does Srija love doing to Gouri?',
      options: ['Pamper', 'Annoy', 'Scold'],
      correctAnswer: 'Annoy',
    },
    {
      index: 2,
      text: 'Which is  Srija"s favorite make up destination/brand?',
      options: ['Rare Beauty', 'Charlotte Tilbury', 'Alwal Jathara to buy beaty blenders'],
      correctAnswer: 'Alwal Jathara to buy beaty blenders',
    },
    {
      index: 3,
      text: 'What is Srija"s favorite drink?',
      options: ['Hazlenut Frappe', 'Kallu', 'Peach Ice Tea'],
      correctAnswer: 'Kallu',
    },
    {
      index: 4,
      text: 'What is Srija"s favorite hobby?',
      options: [
        'Sleep during day',
        'Snack during night',
        'Zone out everywhere',
      ],
      correctAnswer: 'Zone out everywhere',
    },
    {
      index: 5,
      text: "Will you be Abhay's Valenting?",
      options: ['Yes', 'Yes', 'Yes'],
      correctAnswer: 'Yes',
    },
  ];

  public currentIndex = 0;
  public nextIndex = 0;

  public nextQuestion(event: number): void {
    if (event !== 5) {
      this.currentIndex = event + 1;
    }
  }
}
