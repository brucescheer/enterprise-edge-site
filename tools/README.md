# Regenerating the Open Graph image

`og.html` is the source of `public/assets/ee-og-1200x630.png`. There is no SVG
rasterizer on this machine (no rsvg-convert, ImageMagick, Inkscape or cairosvg),
so the image is rendered by headless Chrome, which is present:

```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
  --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --window-size=1200,630 \
  --screenshot=public/assets/ee-og-1200x630.png \
  "file://$PWD/tools/og.html"
```

Run it from the project root. The fonts are referenced by absolute `file://`
path inside `og.html`, so if the project moves, fix those two `@font-face`
rules before re-rendering or the image silently falls back to a system font.

The headline is deliberately the first sentence only. "You're in none of them"
is the payoff and it belongs on the page, not in the thumbnail.

# Cropping a headshot

Portraits are 800x800 and framed head and shoulders. `sips` only crops from
the centre, which is wrong for a photo where the face is not centred, so
`crop.swift` does an offset crop through CoreGraphics:

```
swift tools/crop.swift <in.jpg> <out.jpg> <x> <y> <w> <h> 800
```

x and y are from the top left of the source image. Bruce's was
`215 0 570 570` from a 1000x813 original.

# The symbol

`public/assets/ee-symbol.png` is the shipped copy, downscaled to 320px because
the header renders it at 68px and the Open Graph card at 104px. The original
1254px export from the brand kit is kept at `tools/source/ee-symbol-1254.png`
for anything that needs it, such as print or a larger placement.

The lockup is not a baked image. The header composes the symbol with live text
in Archivo Narrow and Inter, so the symbol, the wordmark and the phrase can be
sized independently. The sizes and how they were derived are documented in
`src/styles/brand.css` under "The lockup".
