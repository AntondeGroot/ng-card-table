// Stylelint runs one rule on purpose: the pointer guard on :hover (see stylelint/). Formatting is
// Prettier's job; the wider stylesheet conventions (stylelint-config-standard-scss) are not gated
// yet — adopting them belongs in its own ratcheted step rather than turning this gate red at once.
export default {
  customSyntax: 'postcss-scss',
  plugins: ['./stylelint/hover-needs-pointer-guard.mjs'],
  rules: {
    'ct/hover-needs-pointer-guard': true,
  },
};
