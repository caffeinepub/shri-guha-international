# Specification

## Summary
**Goal:** Remove the 7th image from the Gallery so it no longer appears or opens in the lightbox.

**Planned changes:**
- Update `frontend/src/sections/GallerySection.tsx` to remove the gallery entry with `uploadSrc` `assets/uploads/IMG_0541-1.jpeg` (and its fallback `assets/generated/sgi-gallery-07-v2.dim_1200x1200.jpg`) from the `images` list used to render tiles and power the lightbox.
- Ensure the existing safeguard that excludes `IMG_0552.png` remains unchanged.

**User-visible outcome:** The Gallery shows 7 tiles instead of 8, and the removed image is no longer visible nor accessible via the lightbox while the remaining images continue to open normally.
