import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-mat-tab-focus',
  templateUrl: './mat-tab-focus.component.html',
  styles: [
  ]
})
export class MatTabFocusComponent implements OnInit {

  constructor() { }

  selectedTab = 0;

  ngOnInit(): void {
  }

  setTab(index: number): void {
    this.selectedTab = index;
    const target = <HTMLElement>document.querySelector(`#mat-tab-label-0-${index}`);
    if (target) {
      target.focus();
    }
  }

}
