import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirection-link',
  templateUrl: './redirection-link.component.html',
  styles: [
  ]
})
export class RedirectionLinkComponent implements OnInit {

  showThirdAnchor = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowThirdAnchor(): void {
    this.showThirdAnchor = !this.showThirdAnchor;
  }

}
