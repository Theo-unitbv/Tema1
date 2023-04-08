import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss'],
})
export class CardPageComponent implements OnInit {
  cardReceived!: Card;

  constructor(private cardService: CardService, private router: Router) {}

  ngOnInit(): void {
    this.cardReceived = this.cardService.getChosenCard();
  }

  returnMainPage() {
    this.router.navigateByUrl('home');
  }
}
