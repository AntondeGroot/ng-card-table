import { describe, expect, it } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { Card } from './card';

describe('Card', () => {
  // The default deck ships as a file of its own, which a game serves with one `assets` line in its
  // angular.json (see the README) — at exactly this path. The card and that line must agree, or
  // every default card is drawn blank. Relative, so it resolves under the page's <base href>.
  it('draws the packaged deck from where a game serves it, relative to the page', () => {
    // GIVEN a card that no game has given a deck of its own
    const fixture = TestBed.createComponent(Card);

    // WHEN it is drawn
    fixture.detectChanges();

    // THEN its default sheet is the packaged one, at the path the README has games serve it from
    const host = fixture.nativeElement as HTMLElement;
    expect(host.style.getPropertyValue('--ct-default-card-sheet')).toBe(
      'url(ng-card-table/card-deck.webp)',
    );
  });
});
