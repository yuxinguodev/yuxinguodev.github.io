// Tools listed on the Tools page and the home page.
export interface Tool {
	id: 'galette' | 'fuzz-pedal'; // picks the icon / cover
	href: string;
	title: string;
	note: string;
	tag: string;
	soon?: boolean; // announced, but the tool page is still a placeholder
}

export const TOOLS: Tool[] = [
	{ id: 'galette', href: '/tools/galette', title: 'Galette', note: 'Game colours, copied as engine code.', tag: 'Colour' },
	{ id: 'fuzz-pedal', href: '/tools/fuzz-pedal', title: 'Fuzz Pedal', note: 'Coming soon.', tag: 'Audio', soon: true },
];
