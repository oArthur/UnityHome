import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  //ToDo Card pode receber `data` do tipo cardItems para evitar varios inputs.
  @Input() size: 'xs' | 'md' | 'xl'= `md`;
  @Input() Title!:string;
  @Input() Subtitle!:string;
  @Input() ButtonTxt!:string;
  @Input() ButtonIcon!:string;

  get isXl(): boolean {
    return this.size === 'xl';
  }

}
