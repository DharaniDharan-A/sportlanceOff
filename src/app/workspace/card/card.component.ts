import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

interface ValueParameters {
  primaryvalue: string[];
  secondaryvalue: string[];
  image: string[];
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() primaryData: any;

  @Input() MapData: any;

  @Input() backgroundMap: any;

  primaryValue: any;

  secondaryValue: any;

  @Input() image: any;

  @Input() ValueParam?: ValueParameters;

  @Output() selectedValue = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }


  getBackground(data: string) {
    return this.MapData[data[this.backgroundMap]];
  }

  onCardClick(data: any) {
    this.selectedValue.emit(data);
  }

  getPrimaryValue(data: any) {
    let newData = data;
    for (const primary of this.ValueParam?.primaryvalue || []) {
      newData = newData[primary];
    }
    return newData;
  }

  getSecondaryValue(data: any) {
    let newData = data;
    for (const secondary of this.ValueParam?.secondaryvalue || []) {
      newData = newData[secondary];
    }
    return newData;
  }

  getImage(data: any) {
    let newData = data;
    for (const image of this.ValueParam?.image || []) {
      newData = newData[image];
    }
    return newData;
  }
}
