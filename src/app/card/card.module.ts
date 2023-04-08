import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card/card.component';
import { CardPageComponent } from './card-page/card-page.component';

@NgModule({
  declarations: [CardComponent, CardPageComponent],
  imports: [CommonModule, CardRoutingModule],
  exports: [CardComponent, CardPageComponent],
})
export class CardModule {}
