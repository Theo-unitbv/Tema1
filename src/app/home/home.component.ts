import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../models/card.model';
import { Offers } from '../models/offers.model';
import { CardService } from '../services/card.service';
import { OffersService } from '../services/offers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  availableCities!: Card[];
  availableOffers!: Offers[];
  selectCity!: string;
  initialCard!: Card;
  principalPageShow: boolean = true;
  nonExistentSearch!: boolean;

  constructor(
    private cardService: CardService,
    private offersService: OffersService,
    private router: Router
  ) {
    this.availableCities = this.cardService.getCards;
    this.initialCard = this.cardService.getInitialCard;
    this.availableOffers = this.offersService.getOffers;
  }
  chosenCity(event: Card) {
    this.initialCard = event;
    this.principalPageShow = false;
  }
  resetMainPage(event: any) {
    this.initialCard = this.cardService.getInitialCard;
    this.principalPageShow = true;
  }
  goToCity() {
    if (!this.selectCity) return;
    const index = this.availableCities.findIndex((data) => {
      return data.title.toLowerCase() === this.selectCity.toLowerCase();
    });
    if (index !== -1) {
      this.router.navigate(['card/city'], {
        queryParams: {
          id: `${this.availableCities[index].id}`,
          name: `${this.availableCities[index].title}`,
        },
      });
      this.cardService.displayChosenCard(this.availableCities[index]);
      this.nonExistentSearch = false;
    } else {
      this.nonExistentSearch = true;
    }
  }
  valueChange($event: any) {
    this.nonExistentSearch = false;
  }
}
