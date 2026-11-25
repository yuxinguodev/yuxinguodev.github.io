// Colour palettes shown in the Palette tool. Most come from this site itself.
export interface Palette {
	name: string;
	note: string;
	mood: string[]; // a few words for the feeling the colours give together
	colors: string[];
}

export const PALETTES: Palette[] = [
	{
		name: 'Hero rainbow',
		note: 'The letters of my name on the home page.',
		mood: ['Playful', 'Warm', 'Hand-drawn'],
		colors: ['#ee86ae', '#e2344f', '#f2662a', '#f8c62e', '#3f9152', '#8193c8', '#4c60d0', '#8d5cc0'],
	},
	{
		name: '80s neon',
		note: 'The drifting particles in the background.',
		mood: ['Electric', 'Arcade', 'Midnight'],
		colors: ['#f3eeff', '#ff2bd6', '#ff4fa3', '#ffb347', '#2de2ff', '#4d7cff', '#b14dff'],
	},
	{
		name: 'Pixel city',
		note: 'Dusky blues and coral from a pixel-art city poster.',
		mood: ['Dusk', 'Calm', 'Retro'],
		colors: ['#443e46', '#f6deb8', '#908ca4', '#57659e', '#c57284', '#ff5b60'],
	},
	{
		name: 'Miami neon',
		note: 'Synthwave sunset over a beach city at night.',
		mood: ['Synthwave', 'Humid night', 'Glow'],
		colors: ['#ff5ca8', '#00f0ff', '#bc6cff', '#ffb86b', '#0b0f2b'],
	},
	{
		name: 'Violet aura',
		note: 'Purple glow, steel blue and a pale highlight.',
		mood: ['Dramatic', 'Mystic', 'Bold'],
		colors: ['#e6e0fa', '#4683ae', '#8b65d3', '#c83fe6', '#3c4c6a'],
	},
	{
		name: 'Amber lens',
		note: 'Hot orange light against cool lilac shadows.',
		mood: ['Sunset', 'Dreamy', 'Retro anime'],
		colors: ['#f2c230', '#f2921d', '#f24f13', '#8082a6', '#46334f'],
	},
	{
		name: 'Lemon pool',
		note: 'Teal water, sea glass and ripe lemons.',
		mood: ['Summer', 'Fresh', 'Mediterranean'],
		colors: ['#0e6973', '#118c8c', '#bad9ce', '#f2bb16', '#bf820f'],
	},
];
