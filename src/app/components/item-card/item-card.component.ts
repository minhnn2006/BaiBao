import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
  @Input() WheyData: any;
  @Output() WheyDataChanged = new EventEmitter();
  like(WheyDataChanged: any) {
    this.WheyDataChanged.emit(this.WheyData);
  }
  
 
}
