import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Comic} from 'src/app/models/image.interface';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
   
})
export class CardComponent {
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();
  @Input()  comics:Comic[]=[];


  detallesClick(image: any) {
      this.cardClick.emit(image); 
  }

}
