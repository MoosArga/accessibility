import { Component, OnInit } from '@angular/core';
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

  constructor(private redirectionAnchorStore: RedirectionAnchorStore) { }

  ngOnInit(): void {
    this.anchors$ = this.redirectionAnchorStore.getAnchors$();
  }

}
