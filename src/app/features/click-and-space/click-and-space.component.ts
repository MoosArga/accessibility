import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-and-space',
  templateUrl: './click-and-space.component.html',
  styles: [
  ]
})
export class ClickAndSpaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  coucou(): void {
    alert('Coucou')
  }

}
