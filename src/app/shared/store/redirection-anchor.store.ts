import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RedirectionLink } from '../model/redirection-link';

@Injectable({
  providedIn: 'root'
})
export class RedirectionAnchorStore {

  private anchors: BehaviorSubject<RedirectionLink[]> = new BehaviorSubject<RedirectionLink[]>([]);

  constructor() { }

  getAnchors$(): Observable<RedirectionLink[]> {
    return this.anchors.asObservable();
  }

  pushAnchors(anchors: RedirectionLink[]): void {
    this.anchors.next(anchors);
  }

  getSnapshot(): RedirectionLink[] {
    return this.anchors.getValue();
  }

}
