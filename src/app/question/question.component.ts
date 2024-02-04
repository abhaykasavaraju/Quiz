import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent implements OnChanges {
  @Input() question!: Question;
  @Output() answerSubmitted = new EventEmitter<number>();
  public submitted = false;
  public answer = '';
  ngOnChanges(changes: SimpleChanges): void {
    this.submitted = false;
  }
  public answerClicked(): void {
    this.submitted = true;
  }

  public nextQuestion(): void {
    this.answerSubmitted.emit(this.question.index);
  }

  public checkCorrectAnswer(): boolean {
    if (this.question.index === 5) {
      alert('Abhay says he loves you! ');
    }
    return this.question.correctAnswer === this.answer;
  }
}
