import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RedirectionLink } from '../../model/redirection-link';
import { RedirectionAnchorStore } from '../../store/redirection-anchor.store';

@Component({
  selector: 'app-redirection-link-widget',
  templateUrl: './redirection-link-widget.component.html',
  styles: [
  ]
})
export class RedirectionLinkWidgetComponent implements OnInit {

  anchors$: Observable<RedirectionLink[]>

  constructor(private redirectionAnchorStore: RedirectionAnchorStore,
              private router: Router) { }

  ngOnInit(): void {
    this.anchors$ = this.redirectionAnchorStore.getAnchors$();
  }

  navigateToAnchor(anchor: RedirectionLink): void {
      this.router.navigate(['.'], { fragment: anchor.link, replaceUrl: true, skipLocationChange: false }).then(() => {
        window.location.hash = anchor.link;
        const target = <HTMLElement>document.querySelector(`#${anchor.link}`);
        if (target) {
          target.focus();
        }
      });
  }

}
