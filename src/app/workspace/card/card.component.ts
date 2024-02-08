import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() primaryData: any;

  @Input() MapData: any;

  @Input() backgroundMap: any;

  @Input() primaryValue: any;

  @Input() secondaryValue: any;

  @Output() selectedValue = new EventEmitter<any>();


  getBackground(data: string) {
    return this.MapData[data[this.backgroundMap]];
  }

  onCardClick(data: any) {
    this.selectedValue.emit(data);
  }

}
