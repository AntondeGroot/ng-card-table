import { Component, Input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { FaceContext } from '../card-table.types';

/** Where a game serves the packaged sprite sheet, relative to the page's <base href>. */
export const DEFAULT_CARD_SHEET = 'ng-card-table/card-deck.webp';

/**
 * A single playing card, drawn from a sprite sheet (the packaged card-deck.webp by default; a
 * host game can swap it via the --ct-card-sheet / --ct-card-cols / --ct-card-rows CSS vars — see card.scss).
 * suit (row) and value (column) are exposed to CSS as --ct-card-row / --ct-card-col, which pick the cell.
 * One element per card (the parent tracks by uuid), so the same element can transition hand → pile.
 * A game that draws its own fronts — tiles, say — passes `face`, a template given the card.
 */
@Component({
  selector: 'ct-card',
  imports: [NgTemplateOutlet],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  host: {
    // The default sheet, which a game serves from the package (see card.scss). Set here, not in the
    // stylesheet: a url() there is resolved — or inlined — by whichever build compiles the styles.
    style: `--ct-default-card-sheet: url(${DEFAULT_CARD_SHEET})`,
    '[style.--ct-card-col]': 'value - 1',
    '[style.--ct-card-row]': 'suit',
  },
})
export class Card {
  @Input() suit = 0;
  @Input() value = 1;
  /** The game's own front; the sprite cell when there is none. */
  @Input() face: TemplateRef<FaceContext> | null = null;

  protected get faceContext(): FaceContext {
    return { $implicit: { suit: this.suit, value: this.value } };
  }
}
