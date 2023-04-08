import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() principalPage!: boolean;
  @Input() cardReceived!: Card;
  @Output() resetMainPage: EventEmitter<any> = new EventEmitter<any>();
  constructor(private router: Router) {}

  returnMainPage() {
    this.resetMainPage.emit();
    this.router.navigateByUrl('/home');
  }
}
