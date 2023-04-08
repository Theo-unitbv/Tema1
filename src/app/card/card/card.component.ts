import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() city!: Card;
  @Output() emitCityChosen: EventEmitter<Card> = new EventEmitter<Card>();

  constructor() {}
  navigateToCityPage() {
    this.emitCityChosen.emit(this.city);
  }
}
