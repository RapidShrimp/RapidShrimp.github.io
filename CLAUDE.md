# RapidShrimp.github.io — Claude Notes

## Responsive Breakpoints

All breakpoints are defined in `styles/WebFormatting.css`.

### `.responsive-container` padding

| Breakpoint | Width range | Horizontal padding | Vertical padding |
|---|---|---|---|
| Desktop | > 1150px | 128px | 96px |
| Tablet / iPad | 800px – 1150px | 60px | 72px |
| Mobile | 0 – 800px | 20px | 48px |

### `.section-divider` margin (must mirror container horizontal padding)

| Breakpoint | `margin` |
|---|---|
| Desktop | `0 128px` |
| Tablet / iPad | `0 60px` |
| Mobile | `0 20px` |

**Rule:** whenever `.responsive-container` horizontal padding changes, update `.section-divider` margin to match so dividers stay flush with content edges.

---

### Portfolio card (`div.cardwrapper`) breakpoint

| Breakpoint | Width | Height | Notes |
|---|---|---|---|
| Desktop | 420px | 460px | Full card with tags visible |
| ≤ 1325px | 200px `!important` | 330px `!important` | `p` elements collapsed; tags still visible, clipped by `overflow: hidden` |

`overflow: hidden` on `div.cardwrapper` prevents tags from visually escaping the card boundary at any size. Do not hide `.card-tags` in media queries — they wrap naturally inside the 160px content area at the narrow 200px card size.

---

## Layout Conventions

- **Font:** `'Inter', sans-serif` — imported via Google Fonts in every HTML file's `<head>`
- **Background:** `#080808`
- **Nav:** semi-transparent `rgba(0,0,0,0.82)` + `backdrop-filter: blur(12px)` with `border-bottom: 1px solid rgba(255,255,255,0.07)`
- **Primary button** (`.highlight-button`): white fill, black text, `border-radius: 4px`
- **Secondary button** (`.accessory-button`): transparent + `1px` white outline, `border-radius: 4px`
- **Cards** (`.skill-card`, `.hire-card`): `background: rgba(255,255,255,0.03)`, `border: 1px solid rgba(255,255,255,0.08)`, `border-radius: 6px`
- **Card tags** (`.card-tag`): 11px uppercase pill labels, hidden on small cards

## Style Reference

Targeting the aesthetic of https://www.unrealengine.com/en-US:
- Near-black background, frosted-glass nav, heavy-weight (`900`) hero typography
- Negative letter-spacing on large text (`-1.5px` at 56px, `-0.8px` at 42px)
- Minimal decoration — borders use low-opacity white (`rgba(255,255,255,0.06–0.2)`)
- Brightness-based hover on image cards, no jarring colour swaps

## d-flex

`d-flex` is **not defined** in this project's CSS. Do not use it.
Use `flex-row` or `flex-column` directly — both already include `display: flex`.
