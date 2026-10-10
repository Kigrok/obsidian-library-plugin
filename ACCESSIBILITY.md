# Accessibility

Library should work for everyone who uses Obsidian, including people who use a keyboard instead of a mouse, a screen reader, high-contrast or custom themes, larger text, or reduced motion. Barriers are treated as bugs.

## Where it runs

Library runs inside Obsidian 1.8.7 or newer, on desktop (Windows, macOS, Linux) and mobile (iOS, Android). Its interface is drawn with Obsidian's own components and theme variables, so it inherits Obsidian's accessibility support and your theme's colours. The interface is translated into every language Obsidian supports.

## What works today

- **Keyboard**: library cards are focusable and open with Enter or Space; section folds, sort menus, statistics and every toolbar button are native buttons. In the stills gallery, the arrow keys move between pictures and Escape closes it.
- **Screen readers**: icon-only buttons have labels, folds report whether they are open (`aria-expanded`), covers have the title as their alternative text, and the "not started" eye on a cover is announced. Episode and chapter ticks are native checkboxes, and scores are native number fields.
- **Not by colour alone**: the watch-time chart lists every medium with its hours and share in text next to the ring.
- **Themes and text size**: colours come from the active theme (light, dark, or any community theme), and text sizes are relative, so they follow Obsidian's font size and zoom.
- **Motion**: the hover zoom on recommended titles does not animate when your system asks for reduced motion.

## Known limitations

- Library cards have no focus outline of their own; whether keyboard focus is visible on them depends on the theme.
- The small lift of a card on hover still plays with reduced motion turned on.
- The sort menu is a list of buttons: it has no arrow-key navigation and does not close with Escape.
- The sort button is always announced by the label of the first sort ("A-Z" in English), whatever sort is chosen.
- After a choice in the sort menu, or a click elsewhere, closes it, the sort button still reports the menu as open.
- Episode and chapter checkboxes are labelled "Watched" without the episode's name, so a screen reader announces them alike.
- In the share window, the buttons use each network's brand colour with white text; for WhatsApp, Telegram, Reddit, Bluesky and VK that is below the WCAG AA contrast ratio for text.
- Trailers play in YouTube's or Vimeo's embedded player, so captions and player controls are theirs; the player is titled after the trailer.
- Covers, stills, titles, and descriptions come from outside sources and may lack detail; covers have no description beyond the title.

## Report a barrier

Open a [bug report](https://github.com/venvk/obsidian-library-plugin/issues/new/choose) and put "Accessibility" in the title. Say what you were trying to do, what got in the way, and what you use: operating system, Obsidian version, theme, and any assistive technology (screen reader, magnifier, switch or voice control). If you'd rather ask first, start a thread in [Discussions](https://github.com/venvk/obsidian-library-plugin/discussions).
