import { TableLayout } from './card-table.types';

/**
 * A sensible default table: a linear hand fan below the play area, a small spiral pile at the
 * centre, and the deck on it. Games with their own board geometry give their own layout; this is
 * what Keezen uses.
 */
// The pile's top cards that cast a shadow. The spiral repeats every 8 cards, so the 8 on top show,
// but even 8 stacked shadows add up to a dark rim; 4 look like one card's shadow.
const SHADOWED_PILE_CARDS = 4;

export const DEFAULT_LAYOUT: TableLayout = {
  hand: (index, count) => ({ x: 50 + (index - (count - 1) / 2) * 18, y: 116, rot: 0, scale: 1 }),

  pile: (index, count) => {
    const angle = ((90 + index * 45) * Math.PI) / 180; // each card +45° around the pile circle
    return {
      x: (315 + 10 * Math.cos(angle)) / 6, // pile centre 315px, radius 10px → board %
      y: (300 + 10 * Math.sin(angle)) / 6, // centre 300px
      rot: 0,
      scale: 0.6, // pile cards ~60px vs 100px hand
      z: 100 + index, // newest played card stacks on top
      shadow: count - index <= SHADOWED_PILE_CARDS,
    };
  },

  // Mid-table, on the pile: cards are dealt from here at the size they lie on the pile, then shrink
  // into a fan or grow into the hand — and played cards fly back to it at that size.
  deck: () => ({ x: 52.5, y: 50, scale: 0.6 }),
};
