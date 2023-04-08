import { Component, Input } from '@angular/core';
import { Offers } from '../models/offers.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent {
  @Input() offer!: Offers;
}
