```markdown
# Design System Document

## 1. Overview & Creative North Star: "Radioactive Gothic"
This design system is built to disrupt the sanitized, "friendly" aesthetic of modern e-commerce. Our Creative North Star is **Radioactive Gothic**—a collision between the sharp, aggressive lines of underground emo subculture and the fluid, "gooey" nature of experimental confections. 

We break the "template" look by rejecting the standard grid in favor of **Intentional Asymmetry**. Large-scale typography should overlap "gooey" organic masking, and high-contrast neon accents must feel like they are burning through a deep, midnight void. This is not just a store; it is a digital zine for the culinary rebellious.

---

## 2. Colors: The Neon Void
Our palette leverages a brutalist black foundation to make our "toxic" accents vibrate.

- **Primary (`#cfbcff`) & Primary Container (`#6200ea`):** These Deep Purples are the soul of the brand. Use the container for large moody surfaces and the light primary for high-energy interactive states.
- **Secondary (`#ffb692`) & Secondary Container (`#fd6c00`):** Our Neon Orange. This is for "Warning" or "Special Ingredient" callouts. It represents the heat and the chemical reaction.
- **Tertiary (`#00e475`) & Tertiary Fixed (`#62ff96`):** The Toxic Green. This is reserved for success states, active price tags, and "special" attributes. It should feel bioluminescent.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section content. Boundaries are defined strictly through background shifts. For example, a product description in `surface_container_low` should sit directly against a `surface` background. The change in tonal depth is the divider.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical, dark layers.
- **Level 0 (Background):** `surface` (#131313).
- **Level 1 (Sections):** `surface_container_low` (#1b1b1b).
- **Level 2 (Cards/Interaction):** `surface_container` (#1f1f1f) or `surface_container_high` (#2a2a2a).
- **The "Glass & Gradient" Rule:** Floating modals or navigation bars must use `surface_variant` with a 60% opacity and a `backdrop-blur` of 12px. Apply a subtle linear gradient from `primary_container` to `surface` at 15% opacity to give the "glass" a purple tint.

---

## 3. Typography: The Distressed Editorial
We pair the aggressive weight of **Epilogue** with the utilitarian precision of **Inter** and **Space Grotesk**.

- **Display & Headlines (Epilogue):** These are your "distressed" anchors. Use `display-lg` for hero sections. To achieve the "rebellious" vibe, use `headline-lg` with a negative `letter-spacing` of -0.04em. Headings should often be all-caps when using `secondary` or `tertiary` colors.
- **Body (Inter):** High readability is non-negotiable for ingredient lists. Use `body-lg` for product descriptions to ensure the "secret" ingredients are legible against the dark background.
- **Labels (Space Grotesk):** Use `label-md` for technical data (weight, "toxicity level," price). The monospaced feel adds an underground, "classified document" aesthetic.

---

## 4. Elevation & Depth: Tonal Vibration
Forget standard drop shadows. We use light and glow to define space.

- **The Layering Principle:** To lift a product card, move from `surface_container_lowest` for the background to `surface_container_highest` for the card. 
- **Neon Ambient Glows:** Instead of grey shadows, use a diffused glow for active elements. A "Toxic Green" button should have a shadow of `0px 0px 20px 0px` using `tertiary` at 20% opacity.
- **The "Ghost Border" Fallback:** If a container needs more definition (e.g., an input field), use the `outline_variant` token at 15% opacity. Never use 100% opaque lines.
- **Organic Masking:** Product images should not always be rectangular. Use "gooey" SVG masks to create organic, melting shapes that contrast against the sharp-edged `display` typography.

---

## 5. Components

### Buttons
- **Primary:** Sharp edges (`rounded-none`). Background: `secondary_container`. Text: `on_secondary`. On hover, add a `secondary` outer glow.
- **Tertiary (The "Goo" Button):** Use a custom pill shape (`rounded-full`) with `tertiary_container`. This provides the "organic" contrast to the sharp primary buttons.

### Input Fields
- **Styling:** No background. Only a bottom "Ghost Border" using `outline_variant` at 30%. When focused, the border transforms into a `tertiary` (Toxic Green) glow that "bleeds" upward into the text area.

### Cards & Lists
- **Forbid Dividers:** Use `spacing-8` (2.75rem) to separate list items. Use a `surface_container_low` background for alternating list items to create a "Zebra" effect without lines.
- **Product Cards:** Use `surface_container_highest` with an asymmetrical corner radius (e.g., Top-Left: `none`, Bottom-Right: `xl`).

### Signature Component: The "Ingredient Pulse"
A custom chip component using `tertiary` text on a `surface_container_lowest` background. It features a slow, breathing CSS animation that pulses a 2px `tertiary` outer glow to indicate "active/secret" ingredients.

---

## 6. Do's and Don'ts

### Do:
- **Overlap Elements:** Let a headline `display-md` overlap a product image by `spacing-4`.
- **Embrace High Contrast:** Use `on_tertiary_container` (bright green) against `surface` (black) for critical micro-copy.
- **Use Asymmetry:** Mix `rounded-none` containers with `rounded-full` buttons.

### Don't:
- **Use Pure Grey:** All neutrals must be tinted. Use `surface_variant` or `outline_variant` which have purple/dark-blue undertones.
- **Use Default Shadows:** Never use a `0,0,0,0.5` shadow. If it doesn't glow or shift tone, it doesn't belong.
- **Add "Safety" Padding:** This brand is rebellious. Don't be afraid of tight, intentional typography or massive, "wasteful" negative space in heroes.

### Accessibility Note:
While the vibe is "underground," all body text (`body-md`) must maintain a contrast ratio of at least 7:1 against `surface` tiers. Use `on_surface` (#e2e2e2) for all long-form reading.```