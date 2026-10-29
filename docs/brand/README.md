# Look Code — variações

Geradas com image_gen a partir de docs/icon.png; original preservado.

- logo-completo.png: 1254 × 1254, fundo branco.
- logo-horizontal-dark.png: 2172 × 724, fundo escuro; cabeçalho e rodapé.
- simbolo-dark.png: 1254 × 1254, fundo escuro; símbolo sem texto.

PNGs com fundo opaco. A tentativa transparente apresentou artefatos e foi descartada. Reconstruções por IA com pequenas diferenças na geometria e tipografia. A versão horizontal está aplicada ao cabeçalho e rodapé por meio de src/components/ui/BrandLogo.jsx. O componente recorta as margens internas e usa mix-blend-screen para integrar o fundo escuro ao site.

## Prompts finais

logo-completo

Edit the provided Look Code logo. Produce ONE polished high-resolution faithful restoration of the original stacked logo, solid opaque background. Preserve the distinctive black curly braces enclosing two cyan blue circular eyes with black pupils, white inner rings and two short black horizontal eyebrows. Under symbol exact text LOOKCODE with LOOK cyan and CODE black; below exact text TECNOLOGIA black. Preserve original recognizable geometry, typography character and layout, improve crisp smooth edges, symmetry, spacing and optical alignment. Flat solid colors cyan #32B4F8 and near black #111111. Centered tightly framed with modest clear space. No mockup, no shadows, no gradients, no extra elements. Intended for light website backgrounds.

CRITICAL: render on a completely opaque pure white background. Entire image fully opaque. Absolutely clean flat fills, NO distressed texture, NO glow, NO transparency. Production clean logo.

logo-horizontal-dark

Edit target reference logo into ONE refined horizontal brand lockup for dark website header, solid opaque background. Preserve recognizable two circular cyan eyes with white inner rings and black pupils, two short eyebrows and curly braces. Change braces and eyebrows to white for visibility on dark background. Place symbol left, exact text LOOKCODE right in clean premium geometric typography, LOOK cyan #32B4F8 CODE white, small tracked TECNOLOGIA white below wordmark. Strong readability at small header sizes, crisp flat vector-like edges, balanced spacing, tight landscape composition with modest padding. No background, no mockup, no gradients, no glow, no shadows.

CRITICAL: render on a completely opaque #080812 near-black background. Entire image fully opaque. Absolutely clean flat fills, NO distressed texture, NO glow, NO transparency. Production clean logo.

simbolo-dark

Edit reference into ONE standalone compact symbol for dark website backgrounds with genuine solid opaque background. Retain only the distinctive curly braces enclosing two cyan circular eyes, white inner rings, black pupils, and short eyebrows. Remove all text. Braces and eyebrows white; eyes cyan #32B4F8, white rings, black pupils. Preserve original visual identity and proportions, refine perfect symmetry and crisp smooth vector-like contours, strong silhouette and readability at icon sizes. Square canvas, symbol large centered with modest clear space. Flat solid colors only, no glow, no gradients, no shadows, no mockup.

CRITICAL: render on a completely opaque #080812 near-black background. Entire image fully opaque. Absolutely clean flat fills, NO distressed texture, NO glow, NO transparency. Production clean logo.


## Versão transparente aplicada

`logo-horizontal.svg`: reconstrução vetorial com fundo realmente transparente, utilizada no cabeçalho e rodapé. Sem mesclagem CSS, recortes ou fundo opaco. Preserva chaves, olhos azuis e texto da marca; geometria e tipografia reconstruídas.


A tipografia reconstruída foi substituída pelos contornos extraídos de `logo-horizontal-dark.png`, a versão aprovada. O SVG não usa fontes do navegador. Para reproduzir: `python3 scripts/trace-logo.py` (Pillow). Fundo transparente e preenchimentos sólidos.
