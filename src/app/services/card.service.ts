import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  cardChosen!: Card;
  private cities: Card[] = [
    {
      title: 'Ploiesti',
      description: 'Stati departe',
      image:
        'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      id: 1,
    },
    {
      title: 'Bucuresti',
      description: 'Opulence',
      image:
        'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      id: 2,
    },
    {
      title: 'Brasov',
      description: 'La munte',
      image:
        'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      id: 3,
    },
    {
      title: 'Galati',
      description: 'Fugi',
      image:
        'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      id: 4,
    },
    {
      title: 'Oradea',
      description: 'Frumos',
      image:
        'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      id: 5,
    },
    {
      title: 'Sibiu',
      description: 'Chill',
      image:
        'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      id: 6,
    },
  ];
  private initialCard: Card = {
    image:
      'https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'NEW ADVENTURE',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Pellentesque eu
  tincidunt tortor aliquam nulla. Maecenas pharetra convallis posuere morbi
  leo urna molestie at.`,
    id: 0,
  };
  constructor() {}

  get getCards() {
    return this.cities;
  }
  get getInitialCard() {
    return this.initialCard;
  }
  displayChosenCard(card: Card) {
    this.cardChosen = card;
  }
  getChosenCard() {
    return this.cardChosen;
  }
}
