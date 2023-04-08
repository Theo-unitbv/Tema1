import { Injectable } from '@angular/core';
import { Offers } from '../models/offers.model';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  private offersAvailable: Offers[] = [
    {
      title: 'TRAVEL',
      subTitle: 'Article title',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dapibus ultrices in iaculis nunc sed augue lacus viverra.`,
    },
    {
      title: 'TRAVEL ARRANGMENTS',
      subTitle: 'Article title',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dapibus ultrices in iaculis nunc sed augue lacus viverra.`,
    },
    {
      title: 'OUR PROFESSIONAL GUIDE',
      subTitle: 'Article title',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dapibus ultrices in iaculis nunc sed augue lacus viverra.`,
    },
    {
      title: 'ACTIVITIES',
      subTitle: 'Article title',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dapibus ultrices in iaculis nunc sed augue lacus viverra.`,
    },
  ];
  constructor() {}

  get getOffers() {
    return this.offersAvailable;
  }
}
