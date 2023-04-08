import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  cardChosen!: Card;
  private cities: Card[] = [
    {
      title: 'Dubai',
      description: 'Tempus quam pellentesque',
      image:
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      id: 1,
    },
    {
      title: 'Los Angeles',
      description: 'Tempus quam pellentesque',
      image:
        'https://images.unsplash.com/photo-1540232058434-8e7394b7e847?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      id: 2,
    },
    {
      title: 'New York',
      description: 'Tempus quam pellentesque',
      image:
        'https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      id: 3,
    },
    {
      title: 'Miami',
      description: 'Tempus quam pellentesque',
      image:
        'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      id: 4,
    },
    {
      title: 'Bucuresti',
      description: 'Tempus quam pellentesque',
      image:
        'https://images.unsplash.com/photo-1612728464511-475e7bd1a319?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80',
      id: 5,
    },
    {
      title: 'Chicago',
      description: 'Tempus quam pellentesque',
      image:
        'https://images.unsplash.com/photo-1524168272322-bf73616d9cb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
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
