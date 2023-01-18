import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RedirectionLink } from '../model/redirection-link';
import { RedirectionAnchorStore } from '../store/redirection-anchor.store';

@Directive({
  selector: '[appRedirectionAnchor]'
})
export class RedirectionAnchorDirective implements OnInit, OnDestroy {

  @Input() appRedirectionAnchor: string;
  @Input() id: string

  constructor(private redirectionAnchorStore: RedirectionAnchorStore) { }

  ngOnInit(): void {
    const existingLinks = this.redirectionAnchorStore.getSnapshot();
    this.redirectionAnchorStore.pushAnchors([...existingLinks, new RedirectionLink(this.appRedirectionAnchor, this.id)]);
  }

  ngOnDestroy(): void {
    const existingLinks = this.redirectionAnchorStore.getSnapshot();
    this.redirectionAnchorStore.pushAnchors(existingLinks.filter(anchor => anchor.link !== this.id));
  }

}
