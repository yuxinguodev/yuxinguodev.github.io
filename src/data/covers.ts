import type { ImageMetadata } from 'astro';

// Project cover images: every image in src/assets/covers/, sorted by file name
// and reused in a loop. With no images there, covers fall back to grainy gradients (GradientCover).
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/covers/*.{webp,png,jpg,jpeg}', { eager: true });
export const covers = Object.keys(files)
	.sort()
	.map((key) => files[key].default);

export const coverAt = (i: number) => (covers.length ? covers[i % covers.length] : undefined);
